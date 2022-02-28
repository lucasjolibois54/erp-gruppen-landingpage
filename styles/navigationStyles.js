import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: #efefef;
  color: #000;
  z-index: 100;
  overflow: hidden;
`

export const NavHeader = styled.div`
  top: 72px;
  position: relative;
  h2 {
    color: green;
  }
`
export const CloseNav = styled.div`
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

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    li {
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      height: 96px;
      line-height: 96px;
      overflow: hidden;
      .link {
        color: black;
        position: relative;
        display: flex;
        align-items: center;
        .arrow {
          height: 50px;
          margin-right: 8px;
        }
      }
      svg {
        width: 100px;
        path {
          fill: green;
        }
      }
    }
  }
`
export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 56px 0px;
  p {
    color: green;
  }
  svg path {
    fill: green;
  }
`

export const NavImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 40%;
  z-index: -1;
  height: 0;
  width: 130%;
  background: #000;
  .reveal {
      width: 100%;
      background-color: whitesmoke;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
  }
  .image {
      background: #000;
      position: absolute;
      height: 100%;
      margin: 0;
      z-index: -1;
      image {
          height: 100%;
      }
      @media (max-width: 956px) {
        display: none;
      }
  }

`