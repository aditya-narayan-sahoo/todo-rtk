import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (input.trim()) {
          dispatch(addTodo(input));
          setInput("");
        }
      }}
      className="flex justify-center mt-12 space-x-3 mb-4"
    >
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-tight transition-colors duration-200 ease-in-out shadow-sm"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-600 border border-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded-lg transition-colors duration-200 shadow-md"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
