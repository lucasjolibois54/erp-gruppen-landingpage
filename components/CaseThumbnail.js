import { AnimateSharedLayout, motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const cases = [
  {
    id: 1,
    name: 'Cabola ApS',
    desc: 'Business Dynamics 365 solution',
    href: 'case/cabola',
    imageSrc:
      'https://www.apple.com/v/home/aj/images/heroes/iphone-13-pro/hero_iphone_13pro__dhnsegysa42u_small_2x.jpg',
    imageAlt: 'caseOne',
    price: 'caseOne',
    color: 'caseOne',
  },
  {
    id: 2,
    name: 'Cabola ApS',
    desc: 'Business Dynamics 365 solution',
    href: 'case/cabola',
    imageSrc:
      'https://www.apple.com/v/home/aj/images/heroes/watch-series-7/hero_watch__f05go333pz2i_small_2x.jpg',
    imageAlt: 'caseTwo',
    price: 'caseTwo ',
    color: 'caseTwo ',
  },
  {
    id: 3,
    name: 'Cabola ApS',
    desc: 'Business Dynamics 365 solution',
    href: 'case/cabola',
    imageSrc:
      'https://www.apple.com/v/home/aj/images/heroes/watch-series-7/hero_watch__f05go333pz2i_small_2x.jpg',
    imageAlt: 'caseTwo',
    price: 'caseTwo ',
    color: 'caseTwo ',
  },
  {
    id: 4,
    name: 'Cabola ApS',
    desc: 'Business Dynamics 365 solution',
    href: 'case/cabola',
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
            className="w-1/2 h-1/2 grid overflow-hidden m-0 list-none grid-cols-2 grid-rows-1/2 gap-4 p-4  rounded-lg"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {cases.map((props) => (
              <motion.li
                key={props.id}
                className="bg-slate-100 rounded-xl overflow-hidden"
                variants={item}
              >
                <Link key={props.id} href={props.href}>
                  <div className="">
                    <h3 className="text-2xl font-medium p-5 absolute">
                      <span
                        aria-hidden="true"
                        className="inset-0 relative border-2 mr-2 border-slate-300"
                      />
                      {props.name}
                    </h3>
                    <div className="w-full h-full object-center object-cover lg:w-full lg:h-full p-10" />
                    <div className="mx-3 mt-3">
                      <div className="w-screen h-screen object-center object-cover lg:w-full lg:h-full pb-32 px-2 py-2 rounded-t-lg bg-card-bg-1">
                        <h2 className="text-black font-medium">{props.name}</h2>
                        <p className="text-slate-300">{props.desc}</p>
                      </div>
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
