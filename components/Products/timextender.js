import Fade from 'react-reveal/Fade'
import Link from 'next/link'

function TimextenderHero() {
    return (


        <div>
            <div className="pt-0">

            </div>
            <div className="my-auto mx-auto xxsm:mt-6 lgbasemd:mt-0 max-w-7xl">
                <div id="top-about" className=" p-0 flex flex-col w-full lg:flex-row md:p-0 mb-4">
                    <div className="flex text-center flex-col w-full px-3 justify-center lg:w-5/10 lg:text-left lg:pl-10">
                        <p className='mb-5'><span className='bg-tx-bg text-tx-text pl-3 pr-3 pt-2 pb-2 rounded-lg'>Data Varehus</span></p>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl 2xl:text-7xl font-bold lg:mt-0 mt-4 md:mt-0 2xl:mt-4 text-dark-text py-0">
                            TimeXtender <span />er dit data hus
                        </h2>
                        <p className="text-base md:text-lg px-5 text-dark-text py-5 md:px-24 lg:pl-0 lg:pr-20 max-w-md text-text-light-gray">
                            Automatiser processen med at bygge data lakes, warehouses og marts.

                        </p>
                        <div className="flex justify-center text-center items-center py-0 lg:justify-start">
                            <Link href="/kontakt">
                            <a>
                                <button className="bg-black text-white rounded-xl ourservice:px-7 ourservice:py-3 xxsm:px-4 xxsm:py-2 xxsm:px-4 xsm:px-4 xsm:py-3 hover:bg-gray-800  transition duration-500 ease-in-out transform hover:scale-110">
                                    Kom i gang
                                </button>
                            </a>
                            </Link>



                        </div>
                    </div>
                    <div className="w-full  xl:w-5/6">
                            <img
                                className="xxsm:h-auto xxsm:px-10 xsm:h-auto mdsm:h-auto mdsm:h-auto basemd:h-auto baselg:h-auto w-auto my-auto mt-20 md:mt-10 2xl:mt-16 mb-20 mx-auto"
                                src={
                                    "https://res.cloudinary.com/dckwf6med/image/upload/v1647854168/erp/TimextenderP_xzv9fr.webp"
                                }
                                alt="mockup"
                            />

                    </div>
                </div>
                <div className="mx-10">
                    <p className="leading-loose mb-10">
                    TimeXtender genererer kode og dokumentation automatisk,
                    hvilket reducerer omkostningerne med 70%, frigør datateams fra kedelige,
                    gentagne opgaver og giver forretningsbrugere en kodefri oplevelse til at 
                    skabe deres egne dataprodukter.
                    </p>

                    <p className="leading-loose mb-32">
                    Opbygning af et dataområde kræver normalt en bred vifte af værktøjer, 
                    der ofte ikke integreres, hvilket efterlader processen for det meste manuel. 
                    TimeXtender erstatter disse værktøjer med en integreret datastyringsplatform.

                    </p>
                    </div>

            </div>
        </div>
    )

}

export default TimextenderHero