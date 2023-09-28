import { useContext } from "react";
import { NoHistory, TransactionCard } from "../components";
import { TransacContext } from "../context";

export default function HistoryPageAll() {
  const { expense } = useContext(TransacContext);
  return (
    <>
      {expense.length === 0 ? (
        <NoHistory text={"income or expense"} />
      ) : (
        <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 justify-center items-center max-w-7xl mt-6 mx-auto font-Rajdhani">
          {expense.map((transaction) => {
            return (
              <TransactionCard transaction={transaction} key={transaction.id} />
            );
          })}
        </section>
      )}
    </>
  );
}
