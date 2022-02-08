import styled from "styled-components"
import { motion } from "framer-motion"

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
    color: ${props => props.theme.text};
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
      height: 8px;
      display: block;
      background: black;
      margin: 8px;
    }
  }
`