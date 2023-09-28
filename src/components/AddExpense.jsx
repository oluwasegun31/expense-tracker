import { useContext, useRef } from "react";
import { AddTransContext, FormErrorContext, TransacContext } from "../context";
import { GrClose } from "react-icons/gr";
import ErrorForm from "./ErrorForm";

export default function AddExpense() {
  // modal context
  const { isOpen, setIsOpen } = useContext(AddTransContext);
  // transaction context
  const { addExpense } = useContext(TransacContext);
  // form error context
  const { setIsError } = useContext(FormErrorContext);
  // title and amount ref
  const titleRef = useRef();
  const amountRef = useRef();
  // Function to generate random chracters with letters an number to generate ID
  const generateRandomID = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };
  // submit form function
  const submitForm = () => {
    // get title and amount
    const title = titleRef.current.value;
    const amount = parseFloat(amountRef.current.value);
    if (title === "" || amountRef.current.value === "") {
      setIsError(true);
      return setTimeout(() => setIsError(false), 3000);
    } else {
      // store all details for transaction
      const transaction = {
        id: generateRandomID(6),
        title,
        amount,
      };
      // add transaction
      addExpense(transaction);
      // set all fields to empty
      titleRef.current.value = "";
      amountRef.current.value = "";
    }
    setIsOpen(false);
  };

  return (
    <section
      className={`w-full h-screen fixed top-0 right-0 font-Rajdhani flex flex-col justify-center items-center  z-10 origin-top-right transition-all duration-300 ${
        isOpen ? "scale-100" : "scale-0"
      }`}
    >
      <div className="w-full h-full bg-gray-100 fixed top-0 right-0 -z-10 opacity-60"></div>
      <aside className="sm:w-[500px] w-full h-[400px] bg-white p-5 flex justify-center items-center relative">
        <div
          className="bg-red-400 p-2 absolute top-2 right-2 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <GrClose />
        </div>

        <form>
          <h4 className="sm:text-3xl text-2xl font-semibold mb-4">
            Add Transaction
          </h4>
          <input
            type="text"
            className="border-b w-full sm:text-2xl text-[20px] font-medium px-4 outline-none mb-8"
            placeholder="Title"
            maxLength={12}
            ref={titleRef}
          />
          <input
            type="number"
            className="border-b w-full sm:text-2xl text-[20px] font-medium px-4 outline-none"
            placeholder="Amount"
            ref={amountRef}
          />
          <button
            type="button"
            className="w-full py-3 bg-green-500 text-white font-bold mt-8 sm:text-[22px] text-lg"
            onClick={() => submitForm()}
          >
            Add Transaction
          </button>
        </form>
      </aside>
      <ErrorForm />
    </section>
  );
}
