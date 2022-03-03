import Link from 'next/link'

function Hero() {
  return (
    <div>
      <div className="">
        <video autoPlay muted loop className="absolute smbig:max-h-screen smbig:w-full top-0 -z-50 xxsm:invisible basemd:h-5/6 lgbasemd:h-auto basemd:visible w-auto">
          <source
            src="https://res.cloudinary.com/dckwf6med/video/upload/v1646318905/erp/Untitled_xo3dxl.mp4"
            type="video/mp4"
          />
        </video>
        </div>

      <div className=" my-auto mx-auto xxsm:mt-6 lgbasemd:mt-20 max-w-6xl">
        <div className="">
          <div className="flex">
            <h2 className="text-8xl basemd:text-white xxsm:text-4xl xxsm:ml-10 xxsm:max-w-xs xxsm:pr-9 xsm:text-5xl sbasesm:max-w-sm sbasesm:text-6xl sbasesm:mr-20 baselg:text-7xl baselg:mr-20 baselg:max-w-md base2lg:text-8xl base2lg:max-w-3xl font-bold">
              Konsulenter i gulvhøjde <br />{" "}
              <span className="text-blue-500 leading-snug">IT i skyen.</span>
            </h2>
          </div>
          <p className="text-xl basemd:text-white xxsm:ml-10 max-w-md xxsm:pr-8 xxsm:text-sm xxsm:mt-8 xsm:mt-8 basemd:mt-2 1xl:mt-12">
            ERP Produktion hjalp os med at strømline vores flow,
            og skabe en 20% tidsbesparelse i virksomheden.
          </p>
        </div>
        <a href="#footer" >
        <button className="mt-8 xxsm:ml-10 shadow-lg bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl transition duration-500 ease-in-out transform hover:scale-110">
          Få en quote <span className="ml-6 xxsm:ml-2">➜</span>
        </button>
        </a>
        <Link href="/about">
        <button className="xsm:ml-10 basemd:text-white xxsm:ml-3 underline">
          Læs mere!
        </button>
        </Link>
        <div className="mt-20 bg-white 1xl:mt-60 rounded-t-xl xl:p-7 xl:pb-10 big:mt-96 big:mb-20">
          <div className="flex items-center justify-center invisible h-0 lgbasemd:h-auto lgbasemd:visible lgbasemd:space-x-6 smbaselg:space-x-16 aboutlg:space-x-20 baselg:space-x-28 base2lg:space-x-36">
            <div>
              <p>Vores mål er at digitalisere din <br />
                virksomhed og få den op i skyen</p>
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
              <p className="pt-1 pl-1">over 40 totale <br />
                klienter</p>
            </div>
            <div className="flex">
              <h2 className="text-6xl font-bold"> &gt;12</h2>
              <p className="pt-1 pl-1">over 12 års <br />
                erfaring</p>
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