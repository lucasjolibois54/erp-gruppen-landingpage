import Fade from 'react-reveal/Fade'

import { Tab } from '@headlessui/react'

function Prices() {
    return (
        <div>
            <div className="my-auto mx-auto xxsm:mt-6 lgbasemd:mt-0 max-w-7xl">
                <div id="top-about" className=" p-0 flex flex-col w-full lg:flex-row md:p-0 mb-4">
                <div className="flex flex-col w-full px-3 justify-center lg:w-5/10 lg:text-left lg:pl-10">
                    <h2 className="leading-loose text-center md:text-center lg:text-left mb-10 text-4xl sm:text-5xl md:text-6xl 2xl:text-6xl font-bold lg:mt-0 mt-4 md:mt-0 2xl:mt-4 text-dark-text py-0">
                    Priser


                    </h2>
                <div className="xxsm:mx-10 aboutlg:mx-0">
                    <p className="leading-loose mb-10">
                    Nedenfor kan du se en prisoversigt over Dynamics 365 Business Central.
                    I oversigten kan du ligeledes se, hvilke tilkøb du har mulighed for til Dynamics 365 Business Central,
                    eks. undervisning, support, hjælp til opsætning, konvertering og apps.



                    </p>

                    <p className="leading-loose mb-32">
                    Har du spørgsmål, eller ønsker du at bestille,
                    kan du få hjælp fra os på tlf. 70 70 70 66 eller support@erpsupporten.dk.


                    </p>
                    </div>
                    </div>
                </div>
                <div className="container hidden lg:block">
                    <table className="text-center w-full">
                        <thead className="bg-black flex text-white w-full">
                            <tr className="flex w-full">
                                <th className="p-4 w-1/4 my-auto">Dynamics 365 <br /> Business Central</th>
                                <th className="p-4 w-1/4 text-3xl my-auto">Basic</th>
                                <th className="p-4 w-1/4 text-3xl my-auto">Essential</th>
                                <th className="p-4 w-1/4 text-3xl my-auto">Premium</th>
                            </tr>
                        </thead>
                        <tbody className="flex flex-col items-center justify-between w-full">
                            <tr className="flex w-full mb-4 divide-white divide-x-8">
                                <td className="p-4 w-1/4 bg-gray-100 text-2xl my-auto py-10">Cloud - leje</td>
                                <td className="p-4 w-1/4 text-4xl bg-gray-100">Kr. 157,30 <br /> <span className="text-sm">pr. måned pr. bruger</span></td>
                                <td className="p-4 w-1/4 text-4xl bg-gray-100">Kr. 440,50 <br /> <span className="text-sm">pr. måned pr. bruger</span></td>
                                <td className="p-4 w-1/4 text-4xl bg-gray-100">Kr. 629,30 <br /> <span className="text-sm">pr. måned pr. bruger</span></td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/4">Team Member (Cloud - leje) <br /> <span className="text-xs">(begrænset adgang)</span></td>
                                <td className="p-4 w-1/4">Cats</td>
                                <td className="p-4 w-1/4">Kr. 50,30 <br /> <span className="text-xs">pr. måned pr. bruger</span></td>
                                <td className="p-4 w-1/4">Kr. 50,30 <br /> <span className="text-xs">pr. måned pr. bruger</span></td>
                            </tr>
                            <tr className="flex w-full mb-4 divide-white divide-x-8">
                                <td className="p-4 w-1/4 bg-gray-100">Oprettelse (Cloud - leje)</td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 998</td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 998</td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 998</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/4 my-auto">On Premise licens - eje </td>
                                <td className="p-4 w-1/4 my-auto">Cats</td>
                                <td className="p-4 w-1/4">Kr. 11.167 <br /> <span className="text-xs">pr. bruger</span></td>
                                <td className="p-4 w-1/4">Kr. 15.637 <br /> <span className="text-xs">pr. bruger</span></td>
                            </tr>
                            <tr className="flex w-full mb-4 divide-white divide-x-8">
                                <td className="p-4 w-1/4 bg-gray-100 my-auto py-8">Team Member (On Premise - eje)</td>
                                <td className="p-4 w-1/4 bg-gray-100 my-auto py-8">Cats</td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 2.233 <br /> <span className="text-xs">pr. bruger</span></td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 2.233 <br /> <span className="text-xs">pr. bruger</span></td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/4">Regnskaber (firmaer)</td>
                                <td className="p-4 w-1/4">Ubegrænset</td>
                                <td className="p-4 w-1/4">Ubegrænset</td>
                                <td className="p-4 w-1/4">Ubegrænset</td>
                            </tr>
                            <tr className="flex w-full mb-4 divide-white divide-x-8">
                                <td className="p-4 w-1/4 bg-gray-100">Database (Cloud)</td>
                                <td className="p-4 w-1/4 bg-gray-100">Ubegrænset</td>
                                <td className="p-4 w-1/4 bg-gray-100">Ubegrænset</td>
                                <td className="p-4 w-1/4 bg-gray-100">Ubegrænset</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/4">Revisoradgang</td>
                                <td className="p-4 w-1/4">1 gratis</td>
                                <td className="p-4 w-1/4">1 gratis</td>
                                <td className="p-4 w-1/4">1 gratis</td>
                            </tr>
                            <tr className="flex w-full mb-4 divide-white divide-x-8">
                                <td className="p-4 w-1/4 bg-gray-100">Produktionsmiljø (landespecifikt)</td>
                                <td className="p-4 w-1/4 bg-gray-100">3</td>
                                <td className="p-4 w-1/4 bg-gray-100">3</td>
                                <td className="p-4 w-1/4 bg-gray-100">3</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/4 my-auto">Serviceplan 365 BASIC</td>
                                <td className="p-4 w-1/4">Kr. 25 <br /> <span className="text-xs">pr. måned pr. bruger</span></td>
                                <td className="p-4 w-1/4">Kr. 25 <br /> <span className="text-xs">pr. måned pr. bruger</span></td>
                                <td className="p-4 w-1/4">Kr. 25 <br /> <span className="text-xs">pr. måned pr. bruger</span></td>
                            </tr>
                            <tr className="flex w-full mb-4 divide-white divide-x-8">
                                <td className="p-4 w-1/4 bg-gray-100 my-auto py-8">Serviceplan 365 PRO</td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 150 <br /> <span className="text-xs">pr. måned pr. bruger</span></td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 150 <br /> <span className="text-xs">pr. måned pr. bruger</span></td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 150 <br /> <span className="text-xs">pr. måned pr. bruger</span></td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/4 my-auto">Serviceplan 365 PRO PLUS</td>
                                <td className="p-4 w-1/4">Kr. 600 <br /> <span className="text-xs">pr. måned pr. bruger</span></td>
                                <td className="p-4 w-1/4">Kr. 600 <br /> <span className="text-xs">pr. måned pr. bruger</span></td>
                                <td className="p-4 w-1/4">Kr. 600 <br /> <span className="text-xs">pr. måned pr. bruger</span></td>
                            </tr>
                            <tr className="flex w-full mb-4 divide-white divide-x-8">
                                <td className="p-4 w-1/4 bg-gray-100 my-auto py-8">Træningsplan pr. bruger</td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 100 <br /> <span className="text-xs">pr. bruger</span></td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 100 <br /> <span className="text-xs">pr. bruger</span></td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 100 <br /> <span className="text-xs">pr. bruger</span></td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/4">Online modulkursus</td>
                                <td className="p-4 w-1/4">Kr. 1.495 <br /> <span className="text-xs">pr. deltager</span></td>
                                <td className="p-4 w-1/4">Kr. 1.495 <br /> <span className="text-xs">pr. deltager</span></td>
                                <td className="p-4 w-1/4">Kr. 1.495 <br /> <span className="text-xs">pr. deltager</span></td>
                            </tr>
                            <tr className="flex w-full mb-4 divide-white divide-x-8">
                                <td className="p-4 w-1/4 bg-gray-100 my-auto py-7">Online modulkursus / firma</td>
                                <td className="p-4 w-1/4 bg-gray-100 ">Kr. 3.995<br /> <span className="text-xs">pr. kursus</span></td>
                                <td className="p-4 w-1/4 bg-gray-100 ">Kr. 3.995<br /> <span className="text-xs">pr. kursus</span></td>
                                <td className="p-4 w-1/4 bg-gray-100 ">Kr. 3.995<br /> <span className="text-xs">pr. kursus</span></td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/4">Godt fra start</td>
                                <td className="p-4 w-1/4">Kr. 14.990</td>
                                <td className="p-4 w-1/4">Kr. 14.990</td>
                                <td className="p-4 w-1/4">Kr. 14.990</td>
                            </tr>
                            <tr className="flex w-full mb-4 divide-white divide-x-8">
                                <td className="p-4 w-1/4 bg-gray-100">Trygt i gang</td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 75.990</td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 75.990</td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 75.990</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/4">Trygt i mål</td>
                                <td className="p-4 w-1/4">Kr. 126.990</td>
                                <td className="p-4 w-1/4">Kr. 126.990</td>
                                <td className="p-4 w-1/4">Kr. 126.990</td>
                            </tr>
                            <tr className="flex w-full mb-4 divide-white divide-x-8">
                                <td className="p-4 w-1/4 bg-gray-100 my-auto py-8">Rapportpakke S (1-3 brugere)</td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 49 <br /> <span className="text-xs">pr. måned</span></td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 49 <br /> <span className="text-xs">pr. måned</span></td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 49 <br /> <span className="text-xs">pr. måned</span></td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/4 my-auto">Rapportpakke M (4-5 brugere)</td>
                                <td className="p-4 w-1/4">Kr. 99 <br /> <span className="text-xs">pr. måned</span></td>
                                <td className="p-4 w-1/4">Kr. 99 <br /> <span className="text-xs">pr. måned</span></td>
                                <td className="p-4 w-1/4">Kr. 99 <br /> <span className="text-xs">pr. måned</span></td>
                            </tr>
                            <tr className="flex w-full mb-4 divide-white divide-x-8">
                                <td className="p-4 w-1/4 bg-gray-100 my-auto py-8">Rapportpakke L (6+ brugere)</td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 199 <br /> <span className="text-xs">pr. måned</span></td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 199 <br /> <span className="text-xs">pr. måned</span></td>
                                <td className="p-4 w-1/4 bg-gray-100">Kr. 199 <br /> <span className="text-xs">pr. måned</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Small mobile pricings */}

            <div className="block text-black lg:hidden">
                <div>
                    <div className="pt-20">
                        <div className="my-auto mx-auto xxsm:mt-6 lgbasemd:mt-0 max-w-7xl">

                            <Tab.Group
                                onChange={(index) => {
                                    console.log('Changed selected tab to:', index)
                                }}
                            >
                                <Tab.List>
                                    <div className='text-center flex space-x-2 ourservice:space-x-5 justify-center'>
                                        <Tab><div className='max-w-xs w-24 basemd:w-56 ourservice:w-32 border-2 pt-4 pb-4 rounded-t-lg hover:border-blue-500 hover:bg-blue-50 transition-all ease-in-out'><h2 className='text-xs font-bold text-gray-two'>Basic</h2></div></Tab>
                                        <Tab><div className='max-w-xs w-24 basemd:w-56 ourservice:w-32 border-2 pt-4 pb-4 rounded-t-lg hover:border-blue-500 hover:bg-blue-50 transition-all ease-in-out'><h2 className='text-xs font-bold text-gray-two'>Essential</h2></div></Tab>
                                        <Tab><div className='max-w-xs w-24 basemd:w-56 ourservice:w-32 border-2 pt-4 pb-4 rounded-t-lg hover:border-blue-500 hover:bg-blue-50 transition-all ease-in-out'><h2 className='text-xs font-bold text-gray-two'>Premium</h2></div></Tab>
                                    </div>
                                </Tab.List>
                                <Tab.Panels>
                                    <Tab.Panel> <div className='text-center'>

                                    <tr className="flex w-full bg-black text-white">
                                <th className="p-4 w-1/2 my-auto text-sm">Dynamics 365 Business Central</th>
                                <th className="p-4 w-1/2 my-auto text-sm">Basic</th>
                            </tr>

                            <tbody className="flex flex-col items-center justify-between w-full">
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 my-auto">Cloud - leje</td>
                                <td className="p-4 w-1/2 text-xl my-auto">Kr. 157,30</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Team Member (Cloud - leje)</td>
                                <td className="p-4 w-1/2 text-xs my-auto mx-auto">❌</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Oprettelse (Cloud - leje)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 998</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">On Premise licens - eje </td>
                                <td className="p-4 w-1/2 text-xs my-auto mx-auto">❌</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Team Member (On Premise - eje)</td>
                                <td className="p-4 w-1/2 text-xs my-auto mx-auto">❌</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Regnskaber (firmaer)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Ubegrænset</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Database (Cloud)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Ubegrænset</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Revisoradgang</td>
                                <td className="p-4 w-1/2 text-xs my-auto">1 gratis</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Produktionsmiljø (landespecifikt)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">3</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Serviceplan 365 BASIC</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 25</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Serviceplan 365 PRO</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 150</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Serviceplan 365 PRO PLUS</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 600</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Træningsplan pr. bruger</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 100</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Online modulkursus</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 1.495</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Online modulkursus / firma</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 3.995</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Godt fra start</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 14.990</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Trygt i gang</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 75.990</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Trygt i mål</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 126.990</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Rapportpakke S (1-3 brugere)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 49</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Rapportpakke M (4-5 brugere)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 99</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Rapportpakke L (6+ brugere)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 199</td>
                            </tr>
                        </tbody>





                                    </div></Tab.Panel>
                                    <Tab.Panel> <div className='text-center'>
                                    <tr className="flex w-full bg-black text-white">
                                <th className="p-4 w-1/2 my-auto text-sm">Dynamics 365 Business Central</th>
                                <th className="p-4 w-1/2 my-auto text-sm">Essential</th>
                            </tr>

                            <tbody className="flex flex-col items-center justify-between w-full">
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 my-auto">Cloud - leje</td>
                                <td className="p-4 w-1/2 text-xl my-auto">Kr. 440,50</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Team Member (Cloud - leje)</td>
                                <td className="p-4 w-1/2 text-xs my-auto mx-auto">Kr. 50,30</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Oprettelse (Cloud - leje)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 998</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">On Premise licens - eje </td>
                                <td className="p-4 w-1/2 text-xs my-auto mx-auto">Kr. 11.167</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Team Member (On Premise - eje)</td>
                                <td className="p-4 w-1/2 text-xs my-auto mx-auto">Kr. 2.233</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Regnskaber (firmaer)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Ubegrænset</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Database (Cloud)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Ubegrænset</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Revisoradgang</td>
                                <td className="p-4 w-1/2 text-xs my-auto">1 gratis</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Produktionsmiljø (landespecifikt)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">3</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Serviceplan 365 BASIC</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 25</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Serviceplan 365 PRO</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 150</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Serviceplan 365 PRO PLUS</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 600</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Træningsplan pr. bruger</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 100</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Online modulkursus</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 1.495</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Online modulkursus / firma</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 3.995</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Godt fra start</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 14.990</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Trygt i gang</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 75.990</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Trygt i mål</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 126.990</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Rapportpakke S (1-3 brugere)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 49</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Rapportpakke M (4-5 brugere)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 99</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Rapportpakke L (6+ brugere)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 199</td>
                            </tr>
                        </tbody>
                                        
                                        
                                        
                                        </div></Tab.Panel>
                                    
                                    <Tab.Panel> <div className='text-center'>
                                    <tr className="flex w-full bg-black text-white">
                                <th className="p-4 w-1/2 my-auto text-sm">Dynamics 365 Business Central</th>
                                <th className="p-4 w-1/2 my-auto text-sm">Premium</th>
                            </tr>

                            <tbody className="flex flex-col items-center justify-between w-full">
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 my-auto">Cloud - leje</td>
                                <td className="p-4 w-1/2 text-xl my-auto">Kr. 629,30</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Team Member (Cloud - leje)</td>
                                <td className="p-4 w-1/2 text-xs my-auto mx-auto">Kr. 50,30</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Oprettelse (Cloud - leje)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 998</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">On Premise licens - eje </td>
                                <td className="p-4 w-1/2 text-xs my-auto mx-auto">Kr. 15.637 </td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Team Member (On Premise - eje)</td>
                                <td className="p-4 w-1/2 text-xs my-auto mx-auto">Kr. 2.233</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Regnskaber (firmaer)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Ubegrænset</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Database (Cloud)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Ubegrænset</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Revisoradgang</td>
                                <td className="p-4 w-1/2 text-xs my-auto">1 gratis</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Produktionsmiljø (landespecifikt)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">3</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Serviceplan 365 BASIC</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 25</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Serviceplan 365 PRO</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 150</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Serviceplan 365 PRO PLUS</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 600</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Træningsplan pr. bruger</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 100</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Online modulkursus</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 1.495</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Online modulkursus / firma</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 3.995</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Godt fra start</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 14.990</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Trygt i gang</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 75.990</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Trygt i mål</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 126.990</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Rapportpakke S (1-3 brugere)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 49</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Rapportpakke M (4-5 brugere)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 99</td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="p-4 w-1/2 text-xs my-auto">Rapportpakke L (6+ brugere)</td>
                                <td className="p-4 w-1/2 text-xs my-auto">Kr. 199</td>
                            </tr>
                        </tbody>
                                    
                                    
                                    </div></Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>

                        </div></div></div>
            </div>
        </div>
    )

}

export default Prices