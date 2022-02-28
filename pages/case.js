import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

//components
import Navigation from "../components/Navigation";
import Header from "../components/Header";

const caseOne = [
  {
    id: 1,
    name: "Cabola ApS",
    title: "Dynamics 365 Business Central",
    textBox1:
      "Cabola er en virksomhed der blev stiftet i 2004 og drives af direktør Kenneth Laursen. Kemieksperterne i Cabola tilbyder alle former for kemi; kemiske produkter, rengøringsmilder, saltprodukter og filtermaterialer. Med et stærkt team af ni medarbejdere knokler de dagligt for at sikre deres kunder den bedste løsning.",
    textBox2:
      "Mange virksomheder udelukker muligheden for nyt ERP-system fordi det er omkostningsdyrt, men for Cabola har beslutningen være en investering fordi det er et simpelt system der nemt kan integreres med andre systemer som virksomheden dagligt bruger. Cabola har fået implementeret Nemhandel som også er et af ERP-gruppens tillægsløsninger.",
    href: "case",
    imageSrc:
      "https://www.erpgruppen.dk/wp-content/uploads/2020/02/Cabola-1.jpg",
    imageAlt: "caseOne",
    price: "caseOne",
    color: "caseOne",
  },
];

function Case() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      <Head>
        <title>ERP PRODUKTION</title>
        <meta name="description" content="Generated by create next app" />
        <html lang="da" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <div className="m-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8">
        {caseOne.map((product) => (
          <div key={product.id} className="group relative">
            <div className="md:flex">
              <div className="w-full min-h-80 aspect-w-1 aspect-h-1 overflow-hidden lg:h-full lg:aspect-none">
                <h3 className="text-5xl font-semibold p-5">
                  {product.name}
                  <span
                    aria-hidden="true"
                    className="text-gray-300 mt-5 text-4xl font-regular flex"
                  >
                    {product.title}
                  </span>
                </h3>
              </div>
              <div className="w-full min-h-80 aspect-w-1 aspect-h-1 overflow-hidden lg:h-full lg:aspect-none flex">
                <h3 className="text-gray-700 m-12 text-md">
                  {product.textBox1}
                </h3>
              </div>
            </div>
            <img
              className="w-full h-1/3 object-center object-cover lg:w-full lg:h-1/3 mt-20"
              src={product.imageSrc}
              alt={product.imageAlt}
            />
            <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden lg:h-full lg:aspect-none flex">
              <h3 className="text-gray-700 m-12 text-md">{product.textBox2}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex text-center mx-auto justify-center">
        <h3 className="m-12 text-md">
          Strategy
          <span className="flex text-sm m-3">Hello</span>
          <span className="flex text-sm m-3">Hello</span>
        </h3>
        <h3 className="m-12 text-md">User Experience</h3>
        <h3 className="m-12 text-md">Production</h3>
        <h3 className="m-12 text-md">Platforms</h3>
      </div>
    </div>
  );
}

export default Case;
