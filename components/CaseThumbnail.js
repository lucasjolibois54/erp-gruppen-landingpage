import { AnimateSharedLayout, motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const cases = [
  {
    id: 1,
    category: 'Teknologi',
    product: 'Lagerhåndtering',
    name: '55 Grader Nord',
    desc: 'Automatisk lagerhåndtering',
    intro:
      'Vi hjalp 55 Grader Nord med at håndtere 71% flere ordrer med samme kapacitet.',
    href: 'case/55-grader-nord',
    imageSrc:
      'https://www.apple.com/v/home/aj/images/heroes/iphone-13-pro/hero_iphone_13pro__dhnsegysa42u_small_2x.jpg',
    imageAlt: '55 Grader Nord',
  },
  {
    id: 2,
    category: 'Teknologi',
    product: 'Business Central & PowerBi',
    name: 'Cabola ApS',
    desc: 'Business Dynamics 365 Løsning',
    intro:
      'Business Dynamics gav Cabola ApS en tidsbesparelse på 20%.',
    href: 'case/cabola',
    imageSrc:
      'https://www.apple.com/v/home/aj/images/heroes/iphone-13-pro/hero_iphone_13pro__dhnsegysa42u_small_2x.jpg',
    imageAlt: 'Cabola ApS',
  },
  {
    id: 3,
    category: 'Teknologi',
    product: 'Business Dynamics 365',
    name: 'Raudahl & Moesby',
    desc: 'Business Dynamics 365 Løsning',
    intro:
      'Udskiftning af ERP-systemet for at forøge væksten i deres virksomhed.',
    href: 'case/raudahl-og-moesby',
    imageSrc:
      'https://www.apple.com/v/home/aj/images/heroes/iphone-13-pro/hero_iphone_13pro__dhnsegysa42u_small_2x.jpg',
    imageAlt: 'Raudahl & Moesby',
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
      <div className="bg-white big:pt-28">
        <div className="px-10 lg:px-24 xl:px-40 flex justify-between pt-32 h-96 xl:h-56 pb-72 xsm:mb-56 basemd:mb-10">
          <h2 className="text-4xl">Kunde Referencer</h2>
        </div>
        <div className="w-full flex justify-center items-center mb-52">
          <motion.ul
            className="w-1/2 h-auto grid list-none sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-10 rounded-lg"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {cases.map((props) => (
              <motion.li
                key={props.id}
                className="border-gray-200 border-t border-r border-b border-l hover:border-blue-500 rounded-xl overflow-hidden hover:bg-blue-50 transition-all ease-in-out"
                variants={item}
              >
                <Link key={props.id} href={props.href}>
                  <div className="m-5">
                    <div className="sm:flex justify-between">
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
                    <p className="text-xs font-light mt-5 leading-4 text-black opacity-90">
                      {props.intro}
                    </p>
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{
                        x: 10,
                        transition: {
                          duration: 0.4,
                          ease: [0.6, 0.05, -0.01, 0.9],
                        },
                      }}
                      className="text-xs font-regular mt-5 leading-4 text-black relative flex align-center items-center"
                    >
                      View Case Study
                      <span className="mx-2">
                        <svg
                          className="w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 101 57"
                        >
                          <path
                            d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                            fill="#000"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </motion.div>
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
