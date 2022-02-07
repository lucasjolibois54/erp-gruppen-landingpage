import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

//components
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Technologies from '../components/Technologies'


export default function Home() {

  const [ toggleMenu, setToggleMenu ] = useState(false)


  return (
    <div >
      <Head>
        <title>ERP PRODUKTION</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Hero />
      <Technologies/>
       
      </main>

    </div>
  )
}
