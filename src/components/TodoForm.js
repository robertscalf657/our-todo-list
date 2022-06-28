import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const TodoForm = ({ name, button }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    dispatch(addTodo({
      text:input,
    }))
    setInput("");
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <h1 className="text-3xl">Todos</h1>

        <div className="flex flex-col items-center py-10 px-5 space-y-4">
          <label className="font-black text-red-600" htmlFor={name}>
            {name}
          </label>
          <input
            className="text-black p-2 text-xl bg-gray-100 rounded-xl"
            type="text"
            name={name}
            placeholder="Hello"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            className="bg-blue-500 p-3 text-white font-semibold rounded-2xl shadow-lg hover:scale-110"
            type="submit"
          >
            {button}
          </button>
        </div>
      </form>
      {/* todo list */}
      
    </>
  );
};

export default TodoForm;
