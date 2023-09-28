import { useContext } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { TransacContext } from "../context";

export default function IncomeExp() {
  // transaction context value
  const { expense } = useContext(TransacContext);
  // income and expense total
  const amounts = expense.map((item) => item.amount);
  const incomeTotal = amounts
    .filter((item) => item > 0)
    .reduce((prev, curr) => prev + curr, 0)
    .toFixed(2);
  const expenseTotal = amounts
    .filter((item) => item < 0)
    .reduce((prev, curr) => (prev += curr), 0)
    .toFixed(2);

  return (
    <section className="xl:w-[600px] sm:w-[500px] w-full mt-6 py-4 flex justify-center items-center  mx-auto border-2 border-black text-center capitalize">
      <span className="lg:text-4xl md:text-2xl text-[22px] font-medium md:px-4 px-2 w-[50%] border-r border-r-gray-300 relative">
        <FaLocationArrow className="text-green-600 absolute bottom-[50%] -translate-y-[-50%] md:left-6 left-1 xl:text-3xl text-2xl" />
        <h4 className="font-medium">Income</h4>
        <p className="text-green-500">₦{incomeTotal}</p>
      </span>
      <span className="lg:text-4xl md:text-2xl text-[22px] font-medium md:px-4 px-2 w-[50%] relative">
        <FaLocationArrow className="text-red-600 absolute bottom-[50%] -translate-y-[-50%] md:right-6 right-1 rotate-180 xl:text-3xl text-2xl" />
        <h4 className="font-medium">Expense</h4>
        <p className="text-red-500">₦{expenseTotal}</p>
      </span>
    </section>
  );
}
