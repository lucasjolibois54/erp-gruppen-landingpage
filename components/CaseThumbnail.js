import { AnimateSharedLayout, motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const cases = [
  {
    id: 1,
    name: 'Cabola ApS',
    href: 'case/cabola',
    imageSrc:
      'https://www.apple.com/v/home/aj/images/heroes/iphone-13-pro/hero_iphone_13pro__dhnsegysa42u_small_2x.jpg',
    imageAlt: 'caseOne',
    price: 'caseOne',
    color: 'caseOne',
  },
  {
    id: 2,
    name: 'Gates and wickets',
    href: 'case/apple',
    imageSrc:
      'https://www.apple.com/v/home/aj/images/heroes/watch-series-7/hero_watch__f05go333pz2i_small_2x.jpg',
    imageAlt: 'caseTwo',
    price: 'caseTwo ',
    color: 'caseTwo ',
  },
  {
    id: 3,
    name: 'Fastenings and clamps',
    href: 'case/apple',
    imageSrc:
      'https://www.apple.com/v/home/aj/images/heroes/watch-series-7/hero_watch__f05go333pz2i_small_2x.jpg',
    imageAlt: 'caseTwo',
    price: 'caseTwo ',
    color: 'caseTwo ',
  },
  {
    id: 4,
    name: 'Additional security',
    href: 'case/apple',
    imageSrc:
      'https://www.apple.com/v/home/aj/images/heroes/iphone-13-pro/hero_iphone_13pro__dhnsegysa42u_small_2x.jpg',
    imageAlt: 'caseThree',
    price: 'caseThree',
    color: 'caseThree',
  },
]

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1.8,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

function Case() {
  return (
    <div>
      <div className="">
        <div className="w-full h-screen overflow-hidden p-0 m-0 flex justify-center items-center">
          <motion.ul
            className="w-1/2 h-1/2 grid overflow-hidden m-0 list-none grid-cols-2 grid-rows-1/2 gap-4 p-4 bg-blue-500 rounded-lg"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {cases.map((props) => (
              <motion.li
                key={props.id}
                className=" rounded-xl overflow-hidden"
                variants={item}
              >
                <Link key={props.id} href={props.href}>
                  <div className="group relative">
                    <div className="w-full min-h-80 aspect-w-1 aspect-h-1 overflow-hidden lg:h-full lg:aspect-none">
                      <h3 className="text-5xl font-semibold p-5 absolute">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {props.name}
                      </h3>
                      <img
                        src={props.imageSrc}
                        alt={props.imageAlt}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </div>
                  </div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  )
}
export default Case
