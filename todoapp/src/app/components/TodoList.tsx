// src/components/TodoList.js
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo }) {
  return (
    <div className="mt-4">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </div>
  );
}

export default TodoList;
