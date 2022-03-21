import Fade from 'react-reveal/Fade'

function AboutHero() {
    return (


<div>

    <div className="my-auto mx-auto xxsm:mt-6 lgbasemd:mt-0 max-w-7xl">
        <div id="top-about" className=" p-0 flex flex-col w-full lg:flex-row md:p-0 mb-4">
        <div className="flex text-center flex-col w-full justify-center lg:w-5/10 lg:text-left">
            
            <h2 className="text-4xl sm:text-5xl md:text-5xl 2xl:text-6xl font-semibold lg:mt-0 mt-4 md:mt-0 2xl:mt-0 text-dark-text py-0">
            Mød vores team af eksperter i  
                <span className="font-light"> marketing <br /> & produktion</span>
            </h2>
            <p className="text-base md:text-xl px-5 text-dark-text py-5 md:px-24 lg:pl-0 lg:pr-20">
            <Fade> ERP- produktion er et af de største erp virksomheder i danmark med ekspert kompetenser inden for industrien. Scroll for at lære os bedre at kende samt hvilke teknologier vi arbejder med.</Fade>
 
            </p>
            
        </div>
        <div className="w-full  xl:w-4/6">
            <Fade>
        <img
                        className="xxsm:h-auto xsm:h-auto mdsm:h-auto mdsm:h-auto basemd:h-auto baselg:h-auto w-auto my-auto mt-20 md:-mt-10 2xl:mt-16 mb-20 mx-auto"
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

export default AboutHero