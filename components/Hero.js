function Hero() {
  return (
    <div>
      <div className="dark:bg-gray-800 my-auto mx-auto mt-56  mb-96 max-w-6xl">
        <div className="">
          <div className="flex">
          <h2 className="text-8xl xxsm:text-6xl xxsm:ml-10 xxsm:max-w-sm sbasesm:max-w-sm sbasesm:mr-20 baselg:text-7xl baselg:mr-20 baselg:max-w-md base2lg:text-8xl base2lg:max-w-3xl font-bold">
            Konsulenter i gulvhøjde <br />{" "}
            <span className="text-green-hl">IT i skyen.</span>
          </h2>
          <img
            className="xxsm:invisible xxsm:w-0 sbasesm:visible sbasesm:w-56 sbasesm:-mt-10 baselg:w-80 base2lg:w-96 base2lg:ml-32 2xl:ml-80 -mt-2 mt-20"
            src={
              "https://res.cloudinary.com/daud22/image/upload/v1644832034/hero_xqfq4p.png"
            }
            alt="mockup"
          />
          </div>
          <p className="text-xl text-gray-400 xxsm:ml-10 xxsm:text-sm xxsm:mt-8 xsm:mt-8 baselg:-mt-8">
            ERP Produktion hjalp os med at strømline vores flow, <br />
            og skabe en 20% tidsbesparelse i virksomheden.
          </p>
        </div>
        <button className="bg-green-hl mt-8 xxsm:ml-10 text-white rounded-xl ourservice:px-10 ourservice:py-4 xxsm:px-4 xxsm:py-2 xsm:px-6 xsm:py-3">
          Get a quote <span className="ml-6">➜</span>
        </button>
        <button className="xsm:ml-10 xxsm:ml-3 underline">
          Learn more!
        </button>
      </div>
    </div>
  );
}

export default Hero;
