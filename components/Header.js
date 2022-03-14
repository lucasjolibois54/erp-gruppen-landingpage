import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
// Styled Components
import Image from 'next/image'
import ERPLogo from '/public/erp.svg'
import Dropdown from '../components/menu/Dropdown'
import LinkList from '../components/menu/LinkList'
import { Dropdowns, Links } from '../components/menu/Info'

import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

const Header = ({ setToggleMenu, toggleMenu }) => {
  return (
    <motion.div
      className="w-full relative mb-52 top-20 z-150"
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
            {Dropdowns.map((props) => {
              return (
                <Dropdown
                  key={props.id}
                  id={props.id}
                  option1={props.option1}
                  option2={props.option2}
                  option3={props.option3}
                  option4={props.option4}
                  option5={props.option5}
                  option6={props.option6}
                  option7={props.option7}
                  name={props.name}
                  title={props.title}
                  href={props.href}
                />
              )
            })}
            {Links.map((props) => {
              return (
                <LinkList
                  key={props.id}
                  id={props.id}
                  name={props.name}
                  title={props.title}
                  href={props.href}
                />
              )
            })}
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
