import React, { forwardRef, useRef } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleComplete } from "../features/todoSlice";

const TodoItem = forwardRef(({ id, text, completed}, ref) => {

  const dispatch = useDispatch();
  const inputRef = useRef();

  function handleComplete() {
    dispatch(toggleComplete({ id, completed: !completed }));
  }

  function handleDelete() {
    dispatch(deleteTodo({ id: id }));
  }
  
function handleUpdate(id, value, e) {
if (e.which === 13) {
  dispatch(editTodo({id, text: value}))
  inputRef.current.disabled = true
}
}

  function changeFocus() {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }

  return (
    <div ref={ref} className="bg-gray-300 w-full mx-10 p-4 shadow-md flex space-x-5 items-center">
      <span className={`${completed && "text-green-600 line-through"} flex gap-x-4 w-full`}>
        <input type="checkbox" checked={completed} onChange={handleComplete} />
        <textarea
          ref={inputRef}
          disabled={inputRef}
          defaultValue={text}
          rows={2}
          onKeyDown= {(e) => handleUpdate(id, inputRef.current.value, e)}
          className="w-full font-bold text-lg py-2 px-4"
        />
      </span>
      <div
        onClick={changeFocus}
        className="bg-green-200 p-2 rounded-full cursor-pointer hover:bg-green-600"
      >
        <PencilIcon className="h-7 w-7" />
      </div>
      <div
        onClick={handleDelete}
        className="bg-red-400 p-2 rounded-full cursor-pointer hover:bg-red-600"
      >
        <TrashIcon className="h-7 w-7 text-white" />
      </div>
    </div>
  );
}
)
export default TodoItem
