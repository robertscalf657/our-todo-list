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
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="mx-auto max-w-lg flex flex-col items-center h">
        {/* Quote */}
        <QuoteBox />
        
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
