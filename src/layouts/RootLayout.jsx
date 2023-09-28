import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { AddExpense } from "../components";
import { useContext } from "react";
import { AddTransContext } from "../context";

export default function RootLayout() {
  // add transaction context
  const { setIsOpen } = useContext(AddTransContext);

  return (
    <>
      <header className="w-full fixed top-0 left-0 font-Rajdhani z-[5] bg-[#f5f5f5]">
        <nav className="w-[94%] mx-auto px-1 py-2 border-b border-b-gray-800 flex justify-between">
          <div className="md:text-2xl text-lg md:leading-[1] leading-[1] text-black font-semibold flex justify-evenly items-end cursor-pointer ">
            <img
              src={logo}
              alt="logo"
              className="md:w-9 w-6 md:h-9 h-6 object-contain"
            />
            <p>Expense Tracker</p>
          </div>

          <div className="flex justify-start items-center gap-8 text-[20px] font-semibold w-[15%]">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-green-700" : "text-black"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/history"}
              className={({ isActive }) =>
                isActive ? "text-green-700" : "text-black"
              }
            >
              History
            </NavLink>
          </div>
          <div>
            <button
              className="px-3 py-1 bg-green-700 text-white text-lg font-semibold hover:bg-green-500 transition duration-300"
              onClick={() => setIsOpen(true)}
            >
              Add Expense
            </button>
          </div>
        </nav>
      </header>
      <AddExpense />
      <main className="md:mt-16 mt-14 lg:px-10 sm:px-6 px-2 font-Rajdhani">
        <Outlet />
      </main>
    </>
  );
}
