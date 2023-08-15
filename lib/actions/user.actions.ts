"use server";

import { revalidatePath } from "next/cache";
import User from "../models/user.model";

import { connectToDB } from "../mongoose";

export async function fetchUser(userId: string) {
  try {
    connectToDB();

    return await User.findOne({ id: userId });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

interface Params {
  userId: string;
  name: string;
  username: string;
  image: string;
  darkMode: boolean;
  onboarded: boolean;
  path?: string;
}

export async function updateUser({
  userId,
  name,
  username,
  image,
  darkMode,
  onboarded,
  path,
}: Params): Promise<void> {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLowerCase(),
        name,
        image,
        darkMode,
        onboarded,
      },
      { upsert: true }
    );

    if (path) {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

export async function setDarkMode({
  id,
  darkMode,
  path,
}: {
  id: string;
  darkMode: boolean;
  path: string;
}): Promise<void> {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { id: id },
      {
        darkMode,
      },
      { upsert: true }
    );

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to set todo done: ${error.message}`);
  }
}
