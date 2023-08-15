'use server';

import { revalidatePath } from 'next/cache';
import Todo from '../models/todo.model';
import User from '../models/user.model';
import { connectToDB } from '../mongoose';

interface Params {
  text: string;
  author: string;
  isDone: boolean;
  path: string;
}

export async function createTodo({
  text,
  author,
  isDone = false,
  path,
}: Params) {
  try {
    connectToDB();

    const createdThread = await Todo.create({
      text,
      author,
      isDone,
    });

    // Update User model
    await User.findByIdAndUpdate(author, {
      $push: { todos: createdThread._id },
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create thread: ${error.message}`);
  }
}

export async function fetchTodos(userId: string) {
  try {
    connectToDB();

    return await Todo.find({ author: userId });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

export async function setTodoDone({
  todoId,
  isDone,
  path,
}: {
  todoId: string;
  isDone: boolean;
  path: string;
}): Promise<void> {
  try {
    connectToDB();

    await Todo.findOneAndUpdate(
      { _id: todoId },
      {
        isDone,
      },
      { upsert: true }
    );

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

export async function deleteTodo(id: string, path: string): Promise<void> {
  try {
    connectToDB();

    // Recursively delete child threads and their descendants
    await Todo.deleteMany({ _id: id });

    // Update User model
    await User.updateMany({ $pull: { todos: id } });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to delete thread: ${error.message}`);
  }
}

export async function resetTodos(userId: string, path: string): Promise<void> {
  try {
    connectToDB();

    // Recursively delete child threads and their descendants
    await Todo.deleteMany({ author: userId, isDone: true });

    const userPost = await fetchTodos(userId);

    // Update User model
    await User.updateMany({ todos: [...userPost] });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to delete thread: ${error.message}`);
  }
}
