function Hero() {
  return (
    <div>
      <div className="-z-50 flex items-center justify-center visible 1xl:invisible">
      <img
              className="absolute top-0 -z-50 opacity-80 h-5/6 w-auto  "
              src={
                "https://res.cloudinary.com/ds8p0huok/image/upload/v1645178980/Group_55_1_wg2ppx.png"
              }
              alt="mockup"
            />
      </div>

      <div className="-z-50 flex  invisible 1xl:visible">
      <img
              className="absolute top-0 -z-50 opacity-80 h-5/6 w-auto  "
              src={
                "https://res.cloudinary.com/ds8p0huok/image/upload/v1645180521/Group_55_4_icc4qj.png"
              }
              alt="mockup"
            />
      </div>


      <div className=" my-auto mx-auto mt-56  mb-96 max-w-6xl">
        <div className="">
          <div className="flex">
            <h2 className="text-8xl xxsm:text-4xl xxsm:ml-10 xxsm:max-w-xs xxsm:pr-9 xsm:text-5xl sbasesm:max-w-sm sbasesm:text-6xl sbasesm:mr-20 baselg:text-7xl baselg:mr-20 baselg:max-w-md base2lg:text-8xl base2lg:max-w-3xl font-bold">
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
          <p className="text-xl text-gray-400 xxsm:ml-10 max-w-md xxsm:pr-8 xxsm:text-sm xxsm:mt-8 xsm:mt-8 baselg:-mt-8">
            ERP Produktion hjalp os med at strømline vores flow,
            og skabe en 20% tidsbesparelse i virksomheden.
          </p>
        </div>
        <button className="bg-green-hl mt-8 xxsm:ml-10 text-white rounded-xl ourservice:px-10 ourservice:py-4 xxsm:px-4 xxsm:py-2 xxsm:px-4 xsm:px-6 xsm:py-3">
          Get a quote <span className="ml-6 xxsm:ml-2">➜</span>
        </button>
        <button className="xsm:ml-10 xxsm:ml-3 underline">
          Learn more!
        </button>


        <div className="mt-20">
          <div className="flex items-center justify-center invisible h-0 lgbasemd:h-auto lgbasemd:visible lgbasemd:space-x-6 smbaselg:space-x-16 aboutlg:space-x-20 baselg:space-x-28 base2lg:space-x-36">
            <div>
              <p>Our mission is to digitalize your <br />
                business and put it in the cloud</p>
            </div>
            <div>
              <img
                className="h-20"
                src={
                  "https://res.cloudinary.com/ds8p0huok/image/upload/v1645174538/Line_25_wdqmvc.svg"
                }
                alt="mockup"
              />
            </div>
            <div className="flex">
              <h2 className="text-6xl font-bold"> &gt;40</h2>
              <p className="text-gray-700 pt-1 pl-1">over 40 total <br />
                clients</p>
            </div>
            <div className="flex">
              <h2 className="text-6xl font-bold"> &gt;12</h2>
              <p className="text-gray-700 pt-1 pl-1">over 12 year <br />
                of experience</p>
            </div>
          </div>
          <div className="flex invisible h-0 lgbasemd:h-auto lgbasemd:visible">
            <img
              className="h-16 w-auto pl-6"
              src={
                "https://res.cloudinary.com/ds8p0huok/image/upload/v1645175524/Ellipse_92_wpnmfl.png"
              }
              alt="mockup"
            />
            <div className="flex flex-col items-center justify-center pl-2">
              <h2 className="font-bold">Niels pedersen</h2>
              <p>CEO, co-owner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
