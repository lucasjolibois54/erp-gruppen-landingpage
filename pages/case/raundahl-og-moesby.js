import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { OpenOutline } from 'react-ionicons'
import { Raudahl } from '../../components/case/Users'
import CaseTemplate from '../../components/case/CaseTemplate'

//components
import Navigation from '../../components/Navigation'
import Header from '../../components/Header'

export default function Case() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const [open, setOpen] = useState(false)

  return (
    <div>
      <Head>
        <title>ERP GRUPPEN</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="Raundahl og Moesby, Kunde reference, Business Central Løsning, Cloud solution" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="da" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      {Raudahl.map((props) => {
        return (
          <CaseTemplate
            key={props.id}
            id={props.id}
            name={props.name}
            title={props.title}
            heading={props.heading}
            textBox1={props.textBox1}
            textBox2={props.textBox2}
            textBox3={props.textBox3}
            textBox4={props.textBox4}
            textBox5={props.textBox5}
            textBox6={props.textBox6}
            imageSrc1={props.imageSrc1}
            redirect={props.redirect}
            href={props.href}
            imageSrc={props.imageSrc}
            imageAlt={props.imageAlt}
          />
        )
      })}
    </div>
  )
}
