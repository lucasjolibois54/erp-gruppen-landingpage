function AboutHero() {
    return (


<div>
    <div className="my-auto mx-auto xxsm:mt-6 lgbasemd:mt-0 max-w-7xl">
        <div id="top" className=" p-0 flex flex-col w-full xl:flex-row md:p-0 mb-4">
        <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">
            
            <h2 className="text-4xl sm:text-5xl md:text-5xl 2xl:text-6xl font-bold lg:mt-0 mt-4 text-dark-text py-0">
            Mød vores team af eksperter indenfor  
                <span className="text-blue-500"> marketing & produktion</span>
            </h2>
            <p className="text-base md:text-xl px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-20">
            Development teams around the world, including NPR, Halfbrick, Duolingo, and Venmo use Firebase to ship their apps. Development teams around the world, including NPR, Halfbrick, Duolingo, and Venmo.
 
            </p>
            <div className="flex justify-center text-center items-center py-0 xl:justify-start">
                <a href="#about" >
                    <button href="#" className="shadow-lg bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:scale-110">
                    Request a demo
                    </button>
                </a>
                

              
            </div>
        </div>
        <div className="w-full  xl:w-4/6">
        <img
                        className="xxsm:h-auto xsm:h-auto mdsm:h-auto mdsm:h-auto basemd:h-auto baselg:h-auto w-auto my-auto mt-20 md:mt-0 2xl:mt-20 mb-20"
                        src={
                            "https://res.cloudinary.com/ds8p0huok/image/upload/v1646051708/image_43_2_dox1is.png"
                        }
                        alt="mockup"
                    />

        </div>
    </div>

    </div>
    </div>
    )

}

export default AboutHero