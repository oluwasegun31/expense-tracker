import { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { FormErrorContext } from "../context";

export default function ErrorForm() {
  const { isError } = useContext(FormErrorContext);
  return (
    <section
      className={`fixed top-10 w-[200px] p-3 bg-red-300 font-Rajdhani border-l-4 border-l-red-600 flex justify-start items-center gap-3 transition-all duration-300 ${
        isError ? "right-3" : "-right-full"
      }`}
    >
      <GrClose />
      <p className="text-lg font-bold">Fill all fields</p>
    </section>
  );
}
