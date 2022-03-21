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

function Case() {
  return (
    <div>
      <div className="mx-1 md:mx-24">
        <motion.ul
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          initial="hidden"
          animate="visible"
        >
          {cases.map((props) => (
            <motion.li
              key={props.id}
              className="border-2 p-2 md:p-10 border-gray-200 border-t border-r border-b border-l hover:border-blue-500 rounded-xl overflow-hidden hover:bg-blue-50 transition-all ease-in-out"
            >
              <Link key={props.id} href={props.href}>
                <div className="justify-between flex text-gray-300">
                  <h3>
                    {props.category}
                  </h3>
                  <h3>
                    {props.product}
                  </h3>
                </div>
                <h2 className="text-5xl font-medium mt-5">
                  {props.name}
                </h2>
                <p className="text-blue-500 mt-2">
                  {props.desc}
                </p>
                <p className="mt-5">
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
                  className="mt-5 flex relative flex align-center items-center"
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

              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}
export default Case
