import Link from "next/link";
import React, { useEffect, useRef } from "react"
// Styled Components
import { Container, Flex } from "../styles/globalStyles"
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"
import Image from 'next/image'
import ERPLogo from '/public/erp.svg'

const Header = ({
  setToggleMenu,
  toggleMenu,
}) => {
 
  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
          >
            <Image width={250} href="/" src={ERPLogo} />
          </Logo>
          <Menu
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header