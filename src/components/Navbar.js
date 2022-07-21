import React from "react";

const Navbar = ({darkMode, setDarkMode}) => {
  return (
    <div className="items-center text-black font-bold bg-white border-2 border-black flex p-5 space-x-10 justify-center text-2xl">
      <h1>Home</h1>
      <h1>List</h1>
      <div className="hover:scale-70 transition-all duration-150 ease-out rounded-full bg-blue-500 text-white px-5 py-3 text-lg z-50 shadow-lg">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Lights On" : "Dark On"}
          </button>
        </div>
    </div>
  );
};

export default Navbar;
