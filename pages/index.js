import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

//components
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Technologies from '../components/Technologies'
import CaseThumbnail from '../components/CaseThumbnail'
import Footer from '../components/Footer'

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div>
      <Head>
        <title>ERP GRUPPEN</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="ERPGruppen, ERP, Cloud solution, cloud, solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="da" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <Hero />
        <CaseThumbnail />
        <Technologies />
        <Footer />
      </main>
    </div>
  )
}
