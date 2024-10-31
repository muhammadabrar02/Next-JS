// src/components/TodoInput.js
"use client";
import { useState } from "react";

function TodoInput({ addTodo }) {
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a todo..."
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleAddTodo}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
