// src/components/TodoItem.js
function TodoItem({ todo, deleteTodo }) {
    return (
      <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg mb-2 shadow">
        <span className="text-gray-800">{todo}</span>
        <button
          onClick={deleteTodo}
          className="text-red-500 hover:text-red-700 transition duration-200"
        >
          Delete
        </button>
      </div>
    );
  }
  
  export default TodoItem;
  