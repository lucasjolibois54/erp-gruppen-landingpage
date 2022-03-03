import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
// Styled Components
import { Container, Flex } from '../styles/globalStyles'
import Image from 'next/image'
import ERPLogo from '/public/erp.svg'

import styled from 'styled-components'
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
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>
            <Link href="/">
              <Image width={250} src={ERPLogo} />
            </Link>
          </Logo>
          <Menu onClick={() => setToggleMenu(!toggleMenu)}>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </motion.div>
  )
}

export default Header

export const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  position: relative;
  top: 62px;
  right: 0;
  left: 0;
  z-index: 101;
  margin-bottom: 150px;
`
export const Logo = styled.div`
  a {
    font-size: 1.8rem;
    text-decoration: none;
    font-weight: 800;
    color: #000;
    color: ${(props) => props.theme.text};
  }
  span {
    height: 16px;
    width: 16px;
    background: #ea291e;
    margin: 0 4px;
    display: inline-block;
    position: relative;
    bottom: 2px;
    cursor: pointer;
  }
`

export const Menu = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 5px;
      display: block;
      background: black;
      margin: 8px;
    }
  }
`
