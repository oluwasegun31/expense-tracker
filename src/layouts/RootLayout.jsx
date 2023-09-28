import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { AddExpense } from "../components";
import { useContext } from "react";
import { AddTransContext, NavbarContext } from "../context";
import { RxHamburgerMenu } from "react-icons/rx";

export default function RootLayout() {
  // add transaction context
  const { setIsOpen } = useContext(AddTransContext);
  const { isVisible, setisVisible } = useContext(NavbarContext);

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
            <p className="md:block hidden">Expense Tracker</p>
          </div>

          <div
            className={`flex sm:flex-row flex-col justify-start items-center gap-8 text-[20px] font-semibold sm:w-[15%] w-[200px] sm:shadow-none shadow-md sm:p-0 px-4 py-10 sm:bg-inherit bg-white sm:relative fixed sm:top-auto top-20 sm:right-auto transition-all duration-300 ${
              isVisible ? "right-5" : "-right-full"
            }`}
          >
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-green-700" : "text-black"
              }
              onClick={() => setisVisible((val) => !val)}
            >
              Home
            </NavLink>
            <NavLink
              to={"/history"}
              className={({ isActive }) =>
                isActive ? "text-green-700" : "text-black"
              }
              onClick={() => setisVisible((val) => !val)}
            >
              History
            </NavLink>
          </div>
          <div>
            <button
              className="px-3 py-1 bg-green-700 text-white sm:text-lg text-base font-semibold hover:bg-green-500 transition duration-300"
              onClick={() => setIsOpen(true)}
            >
              Add Expense
            </button>
          </div>
          <div
            className="text-3xl leading-[1] sm:hidden block cursor-pointer"
            onClick={() => setisVisible((val) => !val)}
          >
            <RxHamburgerMenu />
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
