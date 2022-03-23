import styles from './ourteam.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { LogoLinkedin } from 'react-ionicons'

function OurTeam() {
  const navRoutes = [
    {
      id: 0,
      name: 'Niels Nybro Bolding',
      title: 'CEO',
      positions: 'Microsoft Dynamic 365 Business Central, Projekt planlægning.',
      path: 'colleague',
      image: 'Niels.jpg',
      linkedin: 'https://www.google.com',
    },
    {
      id: 1,
      name: 'Andreas Erik Eriksen',
      title: 'Udvikler',
      positions: 'Frontend udvikler, AL programmør, UX designer.',
      path: 'colleague',
      image: 'Andreas.jpg',
      linkedin: 'https://www.linkedin.com/in/andreas-erik-eriksen/',
    },
    {
      id: 2,
      name: 'Daud Khalid Mir',
      title: 'Udvikler',
      positions: 'Frontend udvikler, AL programmør, UX designer.',
      path: 'colleague',
      image: 'Daud.jpg',
      linkedin: 'https://www.linkedin.com/in/daud-mir-314bb6220/',
    },
    {
      id: 3,
      name: 'Lucas Bendix Jolibois',
      title: 'Udvikler',
      positions: 'Frontend udvikler, AL programmør, UX designer.',
      path: 'colleague',
      image: 'Lucas(3).JPG',
      linkedin: 'https://www.linkedin.com/in/lucas-bendix-jolibois/',
    },
    {
      id: 4,
      name: 'Louise Anette',
      title: 'Power BI',
      positions: 'Power BI expert, Power Platform, Økonomistyring.',
      path: 'colleague',
      image: 'Louise.jpg',
      linkedin: 'https://www.google.com',
    },
    {
      id: 5,
      name: 'Jan Andersen',
      title: 'Power BI',
      positions: 'Power BI expert, Power Platform, Økonomistyring.',
      path: 'colleague',
      image: 'Jan.jpg',
      linkedin: 'https://www.google.com',
    },
    {
      id: 6,
      name: 'Jørgen W. Rasmusen',
      title: 'Power BI Analytiker',
      positions: 'Power BI expert, Power Platform, Økonomistyring.',
      path: 'colleague',
      image: 'Jørgen.jpg',
      linkedin: 'https://www.google.com',
    },
  ]

  return (
    <div className={styles.body}>
        <div className="border-b border-2 border-line mx-auto w-5/6 mt-16 aboutlg:max-w-5xl" />
        <div>
          <h3 className="text-center max-w-7xl font-semibold mx-auto pt-40 xxsm:text-3xl ssm:text-6xl">
            ERP Produktion
          </h3>
          <p className="text-center max-w-5xl mx-auto max-w-3xl pt-10 xxsm:mb-20 xxsm:text-md ssm:text-xl p-10">
            Vi består af Specialister og Konsulenter indenfor Microsoft Business
            Central, Supply Chain og Produktion.{' '}
          </p>
        </div>

        <div className="grid aboutlg:grid-cols-3 basemd:grid-cols-2 grid-cols-1 gap-4 xxsm:p-3 max-w-7xl mb-14">
          {navRoutes.map((route) => (
            <div key={route.id}>
              <div className={styles.card}>
                <div className="absolute w-96">
                  <Image
                    src={require(`/image/${route.image}`)}
                    alt="Picture of the author"
                  />
                </div>
                <div className={styles.cardcontent}>
                  <h2 className={styles.cardtitle}>{route.name}</h2>
                  <p className={styles.cardbody}>{route.title}</p>
                  <p className={styles.cardbody1}>{route.positions}</p>
                  <div className={styles.icons}>
                    <Link href={`${route.linkedin}`}>
                      <img
                        className={styles.linkedin}
                        src="linkedin.svg"
                        alt="linkedin logo"
                        width="25"
                        height="25"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default OurTeam
