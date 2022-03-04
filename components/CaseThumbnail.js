import { AnimateSharedLayout, motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const cases = [
  {
    id: 1,
    category: 'Technology',
    product: 'Mobile App',
    name: 'Cabola ApS',
    desc: 'Business Dynamics 365 solution',
    intro:
      'Best technology results-driven web design, production and marketing agency in Denmark',
    href: 'case/cabola',
    imageSrc:
      'https://www.apple.com/v/home/aj/images/heroes/iphone-13-pro/hero_iphone_13pro__dhnsegysa42u_small_2x.jpg',
    imageAlt: 'caseOne',
    price: 'caseOne',
    color: 'caseOne',
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
        <div className="px-10 lg:px-24 xl:px-40 flex justify-between mt-32">
          <h2 className=" text-4xl">Case Studies</h2>
          <h2 className="text-xl underline text-blue-500">View All</h2>
        </div>
        <div className="w-full h-screen overflow-hidden p-0 m-0 flex justify-center items-center">
          <motion.ul
            className="w-1/2 h-auto grid overflow-hidden m-0 list-none sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-1/2 gap-4 p-4  rounded-lg"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {cases.map((props) => (
              <motion.li
                key={props.id}
                className="border-gray-200 border-t border-r border-b border-l rounded-xl overflow-hidden"
                variants={item}
              >
                <Link key={props.id} href={props.href}>
                  <div className="m-5">
                    <div className="flex justify-between">
                      <h3 className="text-xs font-light uppercase text-gray-300">
                        {props.category}
                      </h3>
                      <h3 className="text-xs font-light text-gray-300">
                        {props.product}
                      </h3>
                    </div>
                    <h2 className="text-3xl font-semibold mt-5">
                      {props.name}
                    </h2>
                    <p className="text-xl text-gray-400 font-light">
                      {props.desc}
                    </p>
                    <p className="text-xs font-regular mt-5 leading-4">
                      {props.intro}
                    </p>
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
