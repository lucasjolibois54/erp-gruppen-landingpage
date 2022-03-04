import App from 'next/app'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import '../styles/globals.css'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
})

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    const spring = {
      type: 'spring',
      damping: 20,
      stiffness: 100,
      when: 'afterChildren',
    }
    return (
      <>
        <AnimatePresence exitBeforeEnter>
          <div className="page-transition-wrapper">
            <motion.div
              transition={spring}
              key={router.pathname}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              id="page-transition-container"
            >
              <Component {...pageProps} key={router.pathname} />
            </motion.div>
          </div>
        </AnimatePresence>
        <AnimatedCursor
          innerSize={10}
          outerSize={20}
          color="32, 75, 69"
          innerScale={0.7}
          outerAlpha={0.6}
          outerScale={2}
        />
      </>
    )
  }
}
