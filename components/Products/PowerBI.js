import Link from 'next/link'

function PowerBi() {
    return (


        <div>
            <div className="pt-0">

            </div>
            <div className="my-auto mx-auto xxsm:mt-6 lgbasemd:mt-0 max-w-7xl">
                <div id="top-about" className=" p-0 flex flex-col w-full lg:flex-row md:p-0 mb-4">
                    <div className="flex text-center flex-col w-full px-3 justify-center lg:w-5/10 lg:text-left lg:pl-10">
                        <p className='mb-5'><span className='bg-tx-text-bi text-tx-bg-bi pl-3 pr-3 pt-2 pb-2 rounded-lg'>Business Intelligence</span></p>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl 2xl:text-7xl font-bold lg:mt-0 mt-4 md:mt-0 2xl:mt-4 text-dark-text py-0">
                            Få overblik med<span />Business Central 
                        </h2>
                        <p className="text-base md:text-lg px-5 text-dark-text py-5 md:px-24 lg:pl-0 lg:pr-20 max-w-md text-text-light-gray">
                        Med Power Platform kan du analysere data, opbygge løsninger og automatisere processer.


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
                                    "https://res.cloudinary.com/dckwf6med/image/upload/v1647858168/erp/PoerBI_1_xkw99x.webp"
                                }
                                alt="mockup"
                            />

                    </div>
                </div>

                <div className="mx-10">
                    <p className="leading-loose mb-10">
                    Microsofts Power BI er et stærkt rapporteringsværktøj, 
                    der kan hjælpe dig med at analysere dine forretningsdata. 
                    Med Power BI kan du få et godt visuelt overblik over dine forretningsdata, 
                    der gør det nemmere for dig og medarbejderne at træffe de rigtige beslutninger baseret på data.

                    </p>

                    <p className="leading-loose mb-10">
                    Du kan nemt og enkelt lave rapporter og få dine data vist med flotte grafer og diagrammer. 
                    Det er desuden nemt at dele interaktive datavisualiseringer med medarbejderne.


                    </p>

                    <p className="leading-loose mb-32">
                    Power BI kan integreres med dit økonomisystem Dynamics 365 Business Central, 
                    dit CRM-system Dynamics 365 Sales og Office 365.


                    </p>
                    </div>

            </div>
        </div>
    )

}

export default PowerBi