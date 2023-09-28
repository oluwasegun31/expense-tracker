import { TiLocationArrowOutline } from "react-icons/ti";

export default function RecentTrans({ transaction, pos }) {
  const { id, title, amount } = transaction;
  // check amount
  const checkAmount = (amount) => {
    return amount > 0 ? "text-green-600" : "text-red-600 rotate-180";
  };
  return (
    <div
      className={`${
        pos > 1 ? "hidden" : "flex"
      } justify-between items-center sm:w-[400px] w-[90%] sm:mx-0 mx-auto py-1 pl-8 border-b border-b-gray-300 relative`}
    >
      <TiLocationArrowOutline
        className={`absolute top-[50%] -translate-y-[50%] left-0 text-2xl ${checkAmount(
          amount
        )}`}
      />
      <div>
        <p className="sm:text-[22px] text-lg font-semibold leading-[1]">
          {title}
        </p>
        <p className="sm:text-lg text-base font-medium leading-[1]">
          {amount > 0 ? "Recieved" : "Paid"}
        </p>
      </div>
      <p
        className={`sm:text-[22px] text-lg font-semibold leading-[1] ${
          amount > 0 ? "text-green-500" : "text-red-500"
        } `}
      >
        {amount > 0 ? "+" : "-"}₦{Math.abs(amount).toFixed(2)}
      </p>
    </div>
  );
}
