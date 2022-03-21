import Fade from 'react-reveal/Fade'

function Prices() {
    return (
        <div>
            <div className="my-auto mx-auto xxsm:mt-6 lgbasemd:mt-0 max-w-7xl hidden lg:block ">
                <div id="top-about" className=" p-0 flex flex-col w-full lg:flex-row md:p-0 mb-4">
                    <div classNameName="flex text-center flex-col w-full px-3 justify-center lg:w-5/10 lg:text-left lg:pl-10">
                        <h2 classNameName="text-4xl sm:text-5xl md:text-7xl 2xl:text-4xl font-bold lg:mt-0 mt-4 md:mt-0 2xl:mt-4 text-dark-text py-0">
                            Priser <span className="text-4xl"> – tilkøb til Dynamics 365 Business Central</span>
                        </h2>
                        <div className="mt-10">
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
                <div className="container">
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
                    <h2>I am small!</h2>
                    <h2>I am small!</h2>
                    <h2>I am small!</h2>
                    <h2>I am small!</h2>
                </div>
            </div>
            )

}

            export default Prices