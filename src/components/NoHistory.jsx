import Money3D from "../assets/money3D.PNG";

export default function NoHistory({ text }) {
  return (
    <section className="w-full h-[80vh] flex flex-col justify-center items-center font-Rajdhani text-center">
      <img
        src={Money3D}
        alt="money"
        className="sm:w-32 w-28 md:h-32 h-28 object-contain mb-6"
      />
      <p className="md:text-3xl text-2xl font-bold leading-[1]">
        "Oops! It looks like there's no {text} history available at the moment".
      </p>
      <p className="text-lg font-semibold leading-[1]">
        Start adding transactions to see your financial history here.
      </p>
    </section>
  );
}
