import { useContext } from "react";
import { IncomeExp, RecentTrans } from "../components";
import { TransacContext } from "../context";
import { RxCountdownTimer } from "react-icons/rx";

export default function HomePage() {
  // expense context value
  const { expense } = useContext(TransacContext);
  // add all amount in expense
  const totalBalance = expense
    .map((item) => item.amount)
    .reduce((prev, curr) => prev + curr, 0)
    .toFixed(2);

  return (
    <section className="mt-6 flex flex-col w-full min-h-[90vh] justify-center items-start">
      <div className="flex justify-center items-center gap-2 xl:text-[85px] lg:text-7xl md:text-5xl text-3xl leading-[1]">
        <h3 className="font-semibold">Total Balance:</h3>
        <p className="font-medium">₦{totalBalance}</p>
      </div>
      <IncomeExp />
      <div className="mx-auto sm:w-auto w-full">
        <section className="mt-6">
          <h4 className="md:text-3xl text-[22px] font-medium flex justify-start items-center gap-2">
            <p>Recent</p>
            <RxCountdownTimer className="text-[22px] text-gray-500" />
          </h4>
          <div className="flex flex-col justify-start items-start gap-1">
            {expense.map((transaction, pos) => {
              return (
                <RecentTrans
                  key={transaction.id}
                  transaction={transaction}
                  pos={pos}
                />
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
