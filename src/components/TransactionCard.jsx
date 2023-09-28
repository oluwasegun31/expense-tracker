import { TiLocationArrowOutline } from "react-icons/ti";
import { GrClose } from "react-icons/gr";
import { useContext } from "react";
import { TransacContext } from "../context";

export default function TransactionCard({ transaction }) {
  // destructure
  const { title, amount, id } = transaction;
  // check amount
  const checkAmount = (amount) => {
    return amount < 0 ? "text-red-600 rotate-180" : "text-green-600 ";
  };
  // delete transaction
  const { deleteTrans } = useContext(TransacContext);
  return (
    <div className="h-[100px] bg-white shadow-md w-full flex justify-between items-center p-3 pl-8 relative hover:scale-95 transition-all duration-300 cursor-default">
      <TiLocationArrowOutline
        className={`absolute top-[50%] -translate-y-[50%] left-1 lg:text-3xl text-2xl ${checkAmount(
          amount
        )}`}
      />
      <div>
        <h4 className="lg:text-3xl text-2xl font-semibold capitalize">
          {title}
        </h4>
        <p className="lg:text-[22px] text-lg font-medium">
          {amount < 0 ? "paid" : "received"}
        </p>
      </div>
      <p className="lg:text-2xl sm:text-[22px] text-lg font-semibold">
        {amount > 0 ? "+" : "-"}₦{Math.abs(amount).toFixed(2)}
      </p>
      <div
        className="absolute top-0 right-0 cursor-pointer bg-red-300 p-2"
        onClick={() => deleteTrans(id)}
      >
        <GrClose />
      </div>
    </div>
  );
}
