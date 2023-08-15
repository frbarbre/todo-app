import Todo from './Todo';

export default function Todos({
  todos,
  userId,
}: {
  todos: any[];
  userId: string;
}) {

  return (
    <div>
      {todos.map((todo) => (
        <Todo
          userId={userId}
          key={todo._id}
          text={todo.text}
          id={todo.id}
          isDone={todo.isDone}
        />
      ))}
    </div>
  );
}
