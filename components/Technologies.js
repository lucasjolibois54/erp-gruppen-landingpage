function Technologies() {
  return (
    <div>
      <div className="mb-28 lg:mt-20">
        <div>
          <h1 className="text-center max-w-6xl font-semibold mx-auto pt-40 xxsm:text-xl basemd:text-5xl ssm:text-4xl">
            Certificeret og erfarende konsulenter
          </h1>
          <p className="text-center max-w-6xl mx-auto max-w-xl pt-8 pb-10 xxsm:text-md px-5 ssm:text-xl ssm:leading-relaxed">
            Vi er et velerfarende og certificeret team med en lang række forskellige
            kompetencer indenfor industrien og vi er fremtidens førende erp virksomhed
            i Danmark. Vores kerne teknologier er TimeXtender, Business Central og Power BI,
            dog er dette langt fra det eneste som vi kan. Vores motto er at vi ikke arbejder for
            dig, men med dig, da din succes er hvad vi gerne vil opnå.


          </p>
        </div>

        <div className="grid aboutlg:grid-cols-4 basemd:grid-cols-3 grid-cols-2 gap-4 text-center max-w-6xl mx-auto pt-5">
          <div>
            <img
              className="xxsm:h-auto xsm:h-auto mdsm:h-auto basemd:h-auto baselg:h-auto w-auto my-auto"
              src={
                "https://res.cloudinary.com/ds8p0huok/image/upload/v1644230015/samples/Group_16_dzizvl.png"
              }
              alt="mockup"
            />
          </div>
          <div>
            <img
              className="xxsm:h-auto xsm:h-auto mdsm:h-auto basemd:h-auto baselg:h-auto w-auto"
              src={
                "https://res.cloudinary.com/ds8p0huok/image/upload/v1644230015/samples/Group_17_jzijol.png"
              }
              alt="mockup"
            />
          </div>
          <div>
            <img
              className="xxsm:h-auto xsm:h-auto mdsm:h-auto basemd:h-auto baselg:h-auto w-auto"
              src={
                "https://res.cloudinary.com/ds8p0huok/image/upload/v1644230015/samples/Group_18_zck8b5.png"
              }
              alt="mockup"
            />
          </div>
          <div>
            <img
              className="xxsm:h-auto xsm:h-auto mdsm:h-auto basemd:h-auto baselg:h-auto w-auto"
              src={
                "https://res.cloudinary.com/ds8p0huok/image/upload/v1644230015/samples/Group_19_oildar.png"
              }
              alt="mockup"
            />
          </div>

          <div>
            <img
              className="xxsm:h-auto xsm:h-auto mdsm:h-auto basemd:h-auto baselg:h-auto w-auto my-auto"
              src={
                "https://res.cloudinary.com/ds8p0huok/image/upload/v1644230015/samples/Group_20_hr5p6j.png"
              }
              alt="mockup"
            />
          </div>
          <div>
            <img
              className="xxsm:h-auto xsm:h-auto mdsm:h-auto basemd:h-auto baselg:h-auto w-auto"
              src={
                "https://res.cloudinary.com/ds8p0huok/image/upload/v1644230015/samples/Group_21_gydk0v.png"
              }
              alt="mockup"
            />
          </div>
          <div>
            <img
              className="xxsm:h-auto xsm:h-auto mdsm:h-auto basemd:h-auto baselg:h-auto w-auto"
              src={
                "https://res.cloudinary.com/ds8p0huok/image/upload/v1644230015/samples/Group_22_m522zl.png"
              }
              alt="mockup"
            />
          </div>
          <div>
            <img
              className="xxsm:h-auto xsm:h-auto mdsm:h-auto basemd:h-auto baselg:h-auto w-auto"
              src={
                "https://res.cloudinary.com/ds8p0huok/image/upload/v1644230015/samples/Group_23_bic9fl.png"
              }
              alt="mockup"
            />
          </div>
        </div>
      </div>
      <div className="border-b border-2 border-line mx-auto max-w-7xl w-5/6" />
      <h2 className="font-bold text-center mt-20 text-4xl">Tilmed Nyhedsbrevet</h2>
      <p className="text-base md:text-lg px-5 text-dark-text py-5 -mt-3 text-center  text-text-light-gray ">Få de nyeste opdateringer på IT & ERP løsninger</p>
      <div className=" mt-6 text-center flex items-center justify-center">


        {/* form */}

        <div className="w-full  pt-0 pb-10 pl-10 pr-10 lg:pl-0 lg:pr-0 text-center w-100% lg:w-6/12">



          <div class="bg-light-blue rounded-lg">
            <div class="flex flex-wrap md:flex-row">
              <input
                id="email" type="email" name="email"
                class="
                m-1
                p-2
                appearance-none
                rounded-md
                text-gray-500 text-sm
                focus:outline-blue-500
                border-none
                w-7/12
                xl:w-9/12
                bg-gray-200
                h-12
              "
                placeholder="Indtast din e-mail..."
              />
              <button
                class="
                w-full
                m-1
                p-2
                pl-6
                pr-6
                text-sm
                bg-blue-500
                rounded-lg
                font-semibold
                uppercase
                lg:w-auto
                transition
                duration-500
                ease-in-out
                transform
                text-white
                hover:bg-blue-700
                
              "
              >
                Tilmeld
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Technologies;
