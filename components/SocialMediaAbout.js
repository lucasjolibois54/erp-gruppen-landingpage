function SocialMediaAbout() {
  return (
    <div>
      <div className="my-auto mx-auto xxsm:mt-6 lgbasemd:mt-0 max-w-7xl">
        <div
          id="top"
          className=" p-0 flex flex-col-reverse w-full lg:flex-row md:p-16 mb-4"
        >
          <div className="w-full  xl:w-4/6">
            <img
              className=" pl-5 pr-5 xxsm:h-auto xsm:h-auto mdsm:h-auto mdsm:h-auto basemd:h-auto baselg:h-auto w-auto my-auto lg:mt-20"
              src={
                "https://res.cloudinary.com/ds8p0huok/image/upload/v1646124265/fbSocials_ywzxfd.png"
              }
              alt="mockup"
            />
          </div>
          <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 lg:text-left lg:pl-10">
            <h2 className="text-4xl sm:text-5xl md:text-5xl 2xl:text-6xl font-bold lg:mt-0 mt-4 text-dark-text py-0 pt-28 lg:pt-20">
              Find os på de sociale medier
            </h2>
            <p className="text-base md:text-xl px-5 text-dark-text py-5 md:px-24 lg:pl-0 lg:pr-20">
              Gennem vores sociale medier får du muligheden, for at lære mere at kende om hvem vi er, vores værdier samt vores nyheder. Vi prøver hele tiden at udvikle os som virksomhed, så hvorfor ikke følge med på rejsen gennem vores kanaler?
            </p>
            <div className="flex justify-center text-center items-center py-0 lg:justify-start">
              <a
                href="#"
                className="  text-blue-500 underline decoration-1 font-bold py-2  transition duration-500 ease-in-out transform hover:scale-110"
              >
                Vores sociale medier 
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaAbout;
