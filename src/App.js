import TodoForm from "./components/TodoForm";
import QuoteBox from "./components/QuoteBox";
import Navbar from "components/Navbar";
import useRandomJoke from "hooks/useRandomJoke";
import { useState } from "react";
import TodoList from "./components/TodoList";


function App() {
const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-blue-300 text-black"} overflow-scroll h-screen`}>

    {/* Navbar */}
            <Navbar />
      <div className="max-w-3x1 mx-auto flex flex-col items-center h">
        {/* Quote */}
        <QuoteBox />
        <div className="hover:scale-70 transition-all duration-150 ease-out rounded-full bg-blue-500 text-white px-5 py-3 text-xl my-10 z-50 shadow-lg">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Lights On" : "Dark On"}
          </button>
        </div>
        <TodoForm name="todo" button="Submit"/>
        <TodoList />
        {/* Todo List */}
        {/* Todo Count */}

      </div>

      {/* Footer */}

    </div>
  );
}

export default App;
