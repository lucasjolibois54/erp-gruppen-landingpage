import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
// Styled Components
import Image from 'next/image'
import ERPLogo from '/public/erp.svg'

import { motion } from 'framer-motion'

const Header = ({ setToggleMenu, toggleMenu }) => {
  return (
    <motion.div
      className="w-full relative z-150 border-b b-4 border-white p-10 bg-white bg-opacity-50 backdrop-blur-2xl"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      <motion.div className="grow mx-auto relative max-w-7xl h-full">
        <motion.div className="relative flex items-center justify-between h-0">
          <div className="text-lg flex no-underline text-black">
            <Link href="/">
              <Image width={250} src={ERPLogo} />
            </Link>
          </div>
          <motion.div className="" onClick={() => setToggleMenu(!toggleMenu)}>
            <button className="origin-center b-none p-5 outline-none">
              <span className="w-9 h-1 block bg-black m-2" />
              <span className="w-9 h-1 block bg-black m-2" />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Header
