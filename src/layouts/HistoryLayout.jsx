import { NavLink, Outlet } from "react-router-dom";

export default function HistoryLayout() {
  const activeClass = {
    isClassActive:
      "sm:text-2xl text-lg font-semibold sm:px-10 px-4 border-b-2 border-b-green-500 text-green-700",
    isClassNotActive:
      "sm:text-2xl text-lg font-medium sm:px-10 px-4 border-b-2 text-black",
  };
  return (
    <section>
      <nav className="w-full pt-2 bg-gray-200 flex justify-start items-center md:gap-6 gap-3 font-Rajdhani">
        <NavLink
          to={"/history"}
          end
          className={({ isActive }) =>
            isActive ? activeClass.isClassActive : activeClass.isClassNotActive
          }
        >
          All
        </NavLink>
        <NavLink
          to={"income"}
          className={({ isActive }) =>
            isActive ? activeClass.isClassActive : activeClass.isClassNotActive
          }
        >
          Income
        </NavLink>
        <NavLink
          to={"expense"}
          className={({ isActive }) =>
            isActive ? activeClass.isClassActive : activeClass.isClassNotActive
          }
        >
          Expense
        </NavLink>
      </nav>
      <Outlet />
    </section>
  );
}
