function Hero() {
  return (
    <div>
      <div className="dark:bg-gray-800 my-auto mx-auto mt-72 mb-96 max-w-7xl">
        <div className="">
          <h2 className="text-7xl leading-tight font-semibold">
            Konsulenter i gulvhøjde <br />{" "}
            <span className="text-green-hl">IT i skyen.</span>
          </h2>
          <p className="text-xl text-gray-400 mt-12">
            ERP Produktion hjalp os med at strømline vores flow, <br />
            og skabe en 20% tidsbesparelse i virksomheden.
          </p>
        </div>
        <button className="bg-green-hl mt-8 text-white rounded-lg px-5 py-2 ">
          Læs mere
        </button>
      </div>
    </div>
  );
}

export default Hero;
