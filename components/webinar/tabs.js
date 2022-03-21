import Fade from 'react-reveal/Fade'

import { Tab } from '@headlessui/react'

function Tabs() {
    return (
        <div>
            <div className="pt-20">
                <div className="my-auto mx-auto xxsm:mt-6 lgbasemd:mt-0 max-w-7xl">

                    <Tab.Group
                        onChange={(index) => {
                            console.log('Changed selected tab to:', index)
                        }}
                    >
                        <Tab.List>
                            <div className='text-center xs:space-x-0 sm:space-x-5 space-y-5'>
                                <Tab><div className='max-w-xs border-2 pr-8 pl-8 pt-4 pb-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all ease-in-out'><h2 className='text-left text-2xl font-bold text-gray-two'>Business central</h2> <p className='text-left text-sm text-gray-two'>Find et BC webinar og få et indbliki økonomi og forretningsstyring</p></div></Tab>
                                <Tab><div className='max-w-xs border-2 pr-8 pl-8 pt-4 pb-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all ease-in-out'><h2 className='text-left text-2xl font-bold text-gray-two'>Sales (CRM)</h2> <p className='text-left text-sm text-gray-two'>Find et sales webinar of få et bedre indblik omkring økonomistyring</p></div></Tab>
                                <Tab><div className='max-w-xs border-2 pr-8 pl-8 pt-4 pb-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all ease-in-out'><h2 className='text-left text-2xl font-bold text-gray-two'>D365 Ejendom</h2> <p className='text-left text-sm text-gray-two'>Find et D365 ejendom webinar og få indblik i ejendoms administration</p></div></Tab>
                            </div>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel> <div className='text-center mt-28'>

                                <img className="max-w-6xl xxsm:h-auto w-5/6 my-auto mt-20 md:mt-16 2xl:mt-16 md:mb-28 mx-auto"
                                    src={
                                        " https://res.cloudinary.com/dckwf6med/image/upload/v1647863695/erp/businesscentral-banner_f4tpqk.webp"
                                    } alt="Banner" />


                                <div>
                                    <div className=" pb-10 lg:pb-36 xsm:pl-10 xsm:pr-10 pr-5 md:pl-36 md:pr-36 lg:pl-10 lg:pr-10 ">

                                        <div className="font-sans mb-0 pt-20 flex flex-col content-center justify-center justify-items-center text-off-white text-3xl md:flex-row bg-transparent">
                                            <div className="w-full  pt-0 pb-20 pr-0 text-center w-100% lg:pr-10 md:w-7/12 lg:w-5/12 lg:mr-0 md:mr-10">
                                                < h2 data-aos="fade-up" className=" text-2xl pb-1 font-semibold text-about-webinar-h md:text-5xl md:text-left">Webinar læring af Microsoft Business Central</h2>

                                            </div>
                                            <div className="w-full  pt-0 md:pb-20 pr-0 text-center w-100% lg:pl-10 md:w-7/12 lg:w-5/12 lg:ml-0 md:ml-10">
                                                < h2 data-aos="fade-up" className=" text-2xl pb-1 font-semibold text-about-webinar-h mb-2  md:text-3xl md:text-left"><span className='text-about-webinar-p text-xl'>01</span> Hvem er det til</h2>
                                                <h2 data-aos="fade-up" className="  text-sm text-about-webinar-p font-light md:text-left md:leading-1 md:text-lg">
                                                    Er du på jagt efter et økonomisystem, der kan gøre det nemmere for dig at håndtere din økonomi- og forretningsstyring? Og vil du gerne vide mere om muligheder med økonomisystemet Microsoft Dynamics 365 Business Central?
                                                </h2>
                                            </div>
                                        </div>

                                        <div
                                            className="font-sans mb-0 mt-20 flex flex-col content-center justify-center justify-items-center text-off-white text-3xl md:flex-row bg-transparent">
                                            <div className="w-full  pt-0 pb-20 pr-0 text-center w-100% lg:pr-10 md:w-7/12 lg:w-5/12 lg:mr-0 md:mr-10">
                                                < h2 data-aos="fade-up" className=" text-2xl pb-1 font-semibold text-about-webinar-h mb-2  md:text-3xl md:text-left"><span className='text-about-webinar-p text-xl'>02</span>  Det du vil lære</h2>
                                                <h2 data-aos="fade-up" className="  text-sm text-about-webinar-p font-light md:text-left md:leading-1 md:text-lg">
                                                    På webinaret kan du høre, hvordan du får en bedre styring af din økonomi med Microsoft Dynamics 365 Business Central som jeres nye økonomisystem. Du bliver klogere på, hvad fordelene er ved at vælge en IT-løsning i cloud, og hvordan du kan få en mere smidig og fleksibel arbejdsgang ved at integrere jeres økonomi system med jeres Office 365.
                                                </h2>

                                            </div>
                                            <div className="w-full  pt-0 pb-20 pr-0 text-center w-100% lg:pl-10 md:w-7/12 lg:w-5/12 lg:ml-0 md:ml-10">
                                                < h2 data-aos="fade-up" className=" text-2xl pb-1 font-semibold text-about-webinar-h mb-2  md:text-3xl md:text-left"><span className='text-about-webinar-p text-xl'>03</span>  Hvornår det er</h2>
                                                <h2 data-aos="fade-up" className="  text-sm text-about-webinar-p font-light md:text-left md:leading-1 md:text-lg">
                                                    Vi afholder webinaret på forskellige datoer: <br />
                                                    – Torsdag d. 10. februar 2022 (kl. 9.00 – 9.30)<br />
                                                    – Torsdag d. 10. marts 2022 (kl. 9.00 – 9.30)<br />
                                                    – Torsdag d. 7. april 2022 (kl. 9.00 – 9.30)<br />
                                                    – Mandag d. 9. maj 2022 (kl. 11.00 – 11.30)<br />
                                                    – Torsdag d. 9. juni 2022 (kl. 9.00 – 9.30)<br /><br />

                                                    <span className='text-about-webinar-h pt-10 font-normal'>ring til os for tilmelding: <a className='underline font-bold' href="tel:004578794040">  +45 123-456-78</a></span>

                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>





                            </div></Tab.Panel>





                            <Tab.Panel> <div className='text-center'><div className='text-center mt-28'>

                                <img className="max-w-6xl xxsm:h-auto w-5/6 my-auto mt-20 md:mt-16 2xl:mt-16 md:mb-28 mx-auto"
                                    src={
                                        " https://res.cloudinary.com/dckwf6med/image/upload/v1647874671/erp/Group_135_r0tw3r.webp"
                                    } alt="Banner" />


                                <div>
                                    <div className=" pb-10 lg:pb-36 xsm:pl-10 xsm:pr-10 pr-5 md:pl-36 md:pr-36 lg:pl-10 lg:pr-10 ">

                                        <div className="font-sans mb-0 pt-20 flex flex-col content-center justify-center justify-items-center text-off-white text-3xl md:flex-row bg-transparent">
                                            <div className="w-full  pt-0 pb-20 pr-0 text-center w-100% lg:pr-10 md:w-7/12 lg:w-5/12 lg:mr-0 md:mr-10">
                                                < h2 data-aos="fade-up" className=" text-2xl pb-1 font-semibold text-about-webinar-h md:text-5xl md:text-left">Webinar læring af Sales (CRM)</h2>

                                            </div>
                                            <div className="w-full  pt-0 md:pb-20 pr-0 text-center w-100% lg:pl-10 md:w-7/12 lg:w-5/12 lg:ml-0 md:ml-10">
                                                < h2 data-aos="fade-up" className=" text-2xl pb-1 font-semibold text-about-webinar-h mb-2  md:text-3xl md:text-left"><span className='text-about-webinar-p text-xl'>01</span> Hvem er det til</h2>
                                                <h2 data-aos="fade-up" className="  text-sm text-about-webinar-p font-light md:text-left md:leading-1 md:text-lg">
                                                    Er du på jagt efter et CRM-system i cloud, som kan give dig bedre styring af og overblik i jeres kunders, salgsaktiviteter og pipeline. Overvejer du at flytte din økonomistyring i cloud, fx NAV/C5, men vil starte stille og roligt med en cloud-baseret CRM-løsning.
                                                </h2>
                                            </div>
                                        </div>

                                        <div
                                            className="font-sans mb-0 mt-20 flex flex-col content-center justify-center justify-items-center text-off-white text-3xl md:flex-row bg-transparent">
                                            <div className="w-full  pt-0 pb-20 pr-0 text-center w-100% lg:pr-10 md:w-7/12 lg:w-5/12 lg:mr-0 md:mr-10">
                                                < h2 data-aos="fade-up" className=" text-2xl pb-1 font-semibold text-about-webinar-h mb-2  md:text-3xl md:text-left"><span className='text-about-webinar-p text-xl'>02</span>  Det du vil lære</h2>
                                                <h2 data-aos="fade-up" className="  text-sm text-about-webinar-p font-light md:text-left md:leading-1 md:text-lg">
                                                    På webinaret kan du høre, hvordan du får et bedre overblik over jeres kunder, salgsaktiviteter og pipeline med Microsoft Dynamics 365 Sales som jeres nye CRM-system. Du bliver klogere på, hvad fordelene er ved at vælge en IT-løsning i cloud, og hvordan du kan samle din kundestyring og økonomistyring i én samlet løsning.
                                                </h2>

                                            </div>
                                            <div className="w-full  pt-0 pb-20 pr-0 text-center w-100% lg:pl-10 md:w-7/12 lg:w-5/12 lg:ml-0 md:ml-10">
                                                < h2 data-aos="fade-up" className=" text-2xl pb-1 font-semibold text-about-webinar-h mb-2  md:text-3xl md:text-left"><span className='text-about-webinar-p text-xl'>03</span>  Hvornår det er</h2>
                                                <h2 data-aos="fade-up" className="  text-sm text-about-webinar-p font-light md:text-left md:leading-1 md:text-lg">
                                                    Vi afholder webinaret på forskellige datoer: <br />
                                                    – Fredag d. 4. marts 2022 (kl. 11.00 – 11.30)<br />
                                                    – Fredag d. 29. april 2022 (kl. 11.00 – 11.30)<br />
                                                    – Fredag d. 3. juni 2022 (kl. 11.00 – 11.30)<br /><br />

                                                    <span className='text-about-webinar-h pt-10 font-normal'>ring til os for tilmelding: <a className='underline font-bold' href="tel:004578794040">  +45 123-456-78</a></span>

                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>





                            </div></div></Tab.Panel>




                            <Tab.Panel> <div className='text-center'><div className='text-center mt-28'>

                                <img className="max-w-6xl xxsm:h-auto w-5/6 my-auto mt-20 md:mt-16 2xl:mt-16 md:mb-28 mx-auto"
                                    src={
                                        " https://res.cloudinary.com/dckwf6med/image/upload/v1647874673/erp/Group_104_ywsbh2.webp"
                                    } alt="Banner" />


                                <div>
                                    <div className=" pb-10 lg:pb-36 xsm:pl-10 xsm:pr-10 pr-5 md:pl-36 md:pr-36 lg:pl-10 lg:pr-10 ">

                                        <div className="font-sans mb-0 pt-20 flex flex-col content-center justify-center justify-items-center text-off-white text-3xl md:flex-row bg-transparent">
                                            <div className="w-full  pt-0 pb-20 pr-0 text-center w-100% lg:pr-10 md:w-7/12 lg:w-5/12 lg:mr-0 md:mr-10">
                                                < h2 data-aos="fade-up" className=" text-2xl pb-1 font-semibold text-about-webinar-h md:text-5xl md:text-left">Webinar læring af Microsoft D365 Ejendom</h2>

                                            </div>
                                            <div className="w-full  pt-0 md:pb-20 pr-0 text-center w-100% lg:pl-10 md:w-7/12 lg:w-5/12 lg:ml-0 md:ml-10">
                                                < h2 data-aos="fade-up" className=" text-2xl pb-1 font-semibold text-about-webinar-h mb-2  md:text-3xl md:text-left"><span className='text-about-webinar-p text-xl'>01</span> Hvem er det til</h2>
                                                <h2 data-aos="fade-up" className="  text-sm text-about-webinar-p font-light md:text-left md:leading-1 md:text-lg">
                                                    Gratis webinar: Introduktion til D365 Ejendom Vil du høre mere om D365 Ejendom, hvad det reelt går ud på og hvordan det fungere, så deltag i vores gratis webinar, hvor du vil få en god grundlæggende introduktion til programmet.
                                                </h2>
                                            </div>
                                        </div>

                                        <div
                                            className="font-sans mb-0 mt-20 flex flex-col content-center justify-center justify-items-center text-off-white text-3xl md:flex-row bg-transparent">
                                            <div className="w-full  pt-0 pb-20 pr-0 text-center w-100% lg:pr-10 md:w-7/12 lg:w-5/12 lg:mr-0 md:mr-10">
                                                < h2 data-aos="fade-up" className=" text-2xl pb-1 font-semibold text-about-webinar-h mb-2  md:text-3xl md:text-left"><span className='text-about-webinar-p text-xl'>02</span>  Det du vil lære</h2>
                                                <h2 data-aos="fade-up" className="  text-sm text-about-webinar-p font-light md:text-left md:leading-1 md:text-lg">
                                                    Se hvordan D365 Ejendom ser ud, og hvordan du navigerer rundt i programmet. Hør også hvilke fordele og muligheder D365 Ejendom tilbyder og hvordan vi kan hjælpe dig og din virksomhed, ved brug af denne teknologi. Webinaret varer 30 minutter, og du deltager online via din PC.
                                                </h2>

                                            </div>
                                            <div className="w-full  pt-0 pb-20 pr-0 text-center w-100% lg:pl-10 md:w-7/12 lg:w-5/12 lg:ml-0 md:ml-10">
                                                < h2 data-aos="fade-up" className=" text-2xl pb-1 font-semibold text-about-webinar-h mb-2  md:text-3xl md:text-left"><span className='text-about-webinar-p text-xl'>03</span>  Hvornår det er</h2>
                                                <h2 data-aos="fade-up" className="  text-sm text-about-webinar-p font-light md:text-left md:leading-1 md:text-lg">
                                                    Vi afholder webinaret på forskellige datoer: <br />
                                                    – Torsdag d. 17. marts 2022 (kl. 9.00 – 9.30)
                                                    – Mandag d. 25. april 2022 (kl. 9.00 – 9.30)<br />
                                                    – Torsdag d. 19. april 2022 (kl. 9.00 – 9.30)<br />
                                                    – Mandag d. 20. juni 2022 (kl. 11.00 – 11.30)<br /><br />

                                                    <span className='text-about-webinar-h pt-10 font-normal'>ring til os for tilmelding: <a className='underline font-bold' href="tel:004578794040">  +45 123-456-78</a></span>

                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>





                            </div></div></Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>

                </div></div></div>
    )
}

export default Tabs