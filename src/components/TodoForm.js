

const TodoForm = () => {
  return (
    <form className="flex flex-col justify-center items-center">
      <h1 className="text-3xl">Enter your Todo</h1>


      <div className="flex flex-col items-center py-10 px-5 space-y-4">
        <label className="font-black text-red-600" htmlFor="todo">Todo</label>
        <input className="p-2 text-xl bg-gray-100 rounded-xl" type="text" name="todo" placeholder="Enter your todo" />
        <button className="bg-blue-500 p-3 text-white font-semibold rounded-2xl shadow-lg hover:scale-110" type="submit">Submit</button>
      </div>


    </form>
  )
}

export default TodoForm



