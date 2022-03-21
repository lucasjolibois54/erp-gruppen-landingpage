import Fade from 'react-reveal/Fade'

function Hero() {
    return (
        <div>
            <div className="my-auto mx-auto xxsm:mt-6 lgbasemd:mt-20 max-w-6xl mb-96">
                <div className="">
                    <div className="baselg:block xxsm:hidden">
                        <Fade>
                            <img
                                className="-z-40 relative object-none object-right-bottom float-right w-1/2 h-auto p-14"
                                src={
                                    "https://res.cloudinary.com/dckwf6med/image/upload/v1646660776/erp/Group_62_1_g0krea.png"
                                }
                                alt="mockup"
                            />
                        </Fade>
                    </div>
                    <div className="flex text-7xl baselg:text-black xxsm:text-4xl xxsm:ml-10 xxsm:max-w-xs xxsm:pr-9 xsm:text-5xl sbasesm:max-w-sm sbasesm:text-6xl sbasesm:mr-20 baselg:text-7xl baselg:mr-20 baselg:max-w-md base2lg:text-7xl base2lg:max-w-3xl font-bold">
                        <Fade>
                            <h2 className="leading-snug">
                                Konsulenter <br /> i gulvhøjde <br />
                                <span className="text-blue-500">IT i skyen.</span>
                            </h2>
                        </Fade>
                    </div>
                    <div className="text-xl xxsm:ml-10 max-w-md xxsm:pr-8 xxsm:text-sm mt-5">
                        <p className='leading-loose text-gray-500'>
                            <Fade>
                                Når du laver et samarbejde med ERPgruppen, nøjes vi ikke med at implementere dit nye forretningssystem – vi sørger også for den nødvendige træning og support, hele vejen indtil du er kommet sikkert i mål.
                            </Fade>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Hero