import Head from 'next/head'
import TimextenderHero from '../components/Products/timextender'
import BusinessCentralHero from '../components/Products/BusinessCentralHero'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import { useState } from 'react'
import PowerBi from '../components/Products/PowerBi'
import Prices from '../components/Products/Prices'

export default function Produkter() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div>
      <Head>
        <title>ERP GRUPPEN</title>
        <meta name="description" content="Generated by create next app" />
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
        <TimextenderHero/>
        <PowerBi/>
        <BusinessCentralHero/>
        <Prices />
      </main>
    </div>
  )
}
