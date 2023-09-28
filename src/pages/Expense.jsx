import { useContext } from "react";
import { TransacContext } from "../context";
import { NoHistory, TransactionCard } from "../components";

export default function ExpensePage() {
  // expense context
  const { expense } = useContext(TransacContext);
  const expenseHistory = expense.filter((item) => item.amount < 0);

  return (
    <>
      {expenseHistory.length === 0 ? (
        <NoHistory text={"expense"} />
      ) : (
        <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 justify-center items-center max-w-7xl mt-6 mx-auto font-Rajdhani">
          {expenseHistory.map((transaction) => {
            return (
              <TransactionCard transaction={transaction} key={transaction.id} />
            );
          })}
        </section>
      )}
    </>
  );
}
