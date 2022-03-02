import { AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import Link from 'next/link'

const caseOne = [
  {
    id: 1,
    name: "Metal fencing",
    href: "case",
    imageSrc:
      "https://www.apple.com/v/home/aj/images/heroes/iphone-13-pro/hero_iphone_13pro__dhnsegysa42u_small_2x.jpg",
    imageAlt: "caseOne",
    price: "caseOne",
    color: "caseOne",
  },
];

const caseTwo = [
  {
    id: 1,
    name: "Gates and wickets",
    href: "case",
    imageSrc:
      "https://www.apple.com/v/home/aj/images/heroes/watch-series-7/hero_watch__f05go333pz2i_small_2x.jpg",
    imageAlt: "caseTwo",
    price: "caseTwo ",
    color: "caseTwo ",
  },
  {
    id: 2,
    name: "Fastenings and clamps",
    href: "case",
    imageSrc:
      "https://www.apple.com/v/home/aj/images/heroes/watch-series-7/hero_watch__f05go333pz2i_small_2x.jpg",
    imageAlt: "caseTwo",
    price: "caseTwo ",
    color: "caseTwo ",
  },
];

const caseThree = [
  {
    id: 1,
    name: "Additional security",
    href: "case",
    imageSrc:
      "https://www.apple.com/v/home/aj/images/heroes/iphone-13-pro/hero_iphone_13pro__dhnsegysa42u_small_2x.jpg",
    imageAlt: "caseThree",
    price: "caseThree",
    color: "caseThree",
  },
];

function Case() {
  return (
    <div>
      <div className="">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8">
            {caseOne.map((product) => (
              <Link key={product.id} href={product.href}>
              <div className="group relative">
                <div className="w-full min-h-80 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-full lg:aspect-none">
                  <h3 className="text-5xl font-semibold p-5 absolute">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                  </h3>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
              </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            {caseTwo.map((product) => (
              <Link key={product.id} href={product.href}>
              <div className="group relative">
                <div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-full lg:aspect-none">
                  <h3 className="text-5xl font-semibold p-5 absolute">
               
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                
                  </h3>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
              </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8">
            {caseThree.map((product) => (
              <Link key={product.id} href={product.href}>
              <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-full lg:aspect-none">
                  <h3 className="text-5xl font-semibold p-5 absolute">
                  
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
               
                  </h3>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Case;
