import Fade from 'react-reveal/Fade'

function Hero() {
    return (

        <div>
            <div className="pt-0">

            </div>
            <div className="my-auto mx-auto xxsm:mt-6 lgbasemd:mt-0 max-w-7xl">
                <div id="top-about" className=" p-0 flex flex-col w-full lg:flex-row md:p-0 mb-4">
                    <div className="flex text-center flex-col w-full px-3 justify-center lg:w-5/10 lg:text-left">
                        <h2 className="text-4xl sm:text-5xl md:text-7xl 2xl:text-6xl font-light lg:mt-0 md:mt-0 text-dark-text py-0">
                            <strong className="font-semibold"> Mød vores team af eksperter i </strong> Marketing & Produktion
                        </h2>
                        <p className="text-base md:text-lg px-5 text-dark-text py-5 md:px-24 lg:pl-0 lg:pr-20 max-w-md text-text-light-gray mt-5">
                            <Fade> ERP- produktion er et af de største erp virksomheder i danmark med ekspert kompetenser inden for industrien. Scroll for at lære os bedre at kende samt hvilke teknologier vi arbejder med.</Fade>

                        </p>
                    </div>
                    <div className="w-full  xl:w-5/6">
                        <Fade>
                            <img
                                className="xxsm:h-auto xxsm:px-10 xsm:h-auto mdsm:h-auto mdsm:h-auto basemd:h-auto baselg:h-auto w-auto my-auto mt-20 md:mt-10 2xl:mt-16 mb-20 mx-auto"
                                src={
                                    "https://res.cloudinary.com/dckwf6med/image/upload/v1646660776/erp/Group_62_1_g0krea.png"
                                }
                                alt="mockup"
                            />
                        </Fade>

                    </div>
                </div>

            </div>
        </div>
    )

}

export default Hero