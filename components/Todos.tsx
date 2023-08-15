import Todo from './Todo';

export default function Todos({
  todos,
  userId,
}: {
  todos: any[];
  userId: string;
}) {
console.log(todos)
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          userId={userId}
          key={todo._id}
          text={todo.text}
          id={todo.id.toString()}
          isDone={todo.isDone}
        />
      ))}
    </div>
  );
}
