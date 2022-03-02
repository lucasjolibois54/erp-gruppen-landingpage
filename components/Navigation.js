import { useState } from "react";
import { Container } from "../styles/globalStyles";
import {
  Nav,
  NavHeader,
  NavList,
  NavFooter,
  NavImage,
} from "../styles/navigationStyles";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const navRoutes = [
  {
    id: 0,
    title: "Home",
    path: "/",
    image: "building02.jpg",
  },
  {
    id: 1,
    title: "About",
    path: "about",
    image: "home.jpg",
  },
];

function Navigation({ toggleMenu, setToggleMenu }) {
  const [revealImage, setRevealImage] = useState({
    show: true,
    image: "building02.jpg",
    key: "0",
  });

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-1" }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}
          >
            <Container>
              <NavHeader></NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map((route) => (
                    <motion.li
                      key={route.id}
                      onHoverStart={() =>
                        setRevealImage({
                          show: true,
                          image: route.image,
                          key: route.id,
                        })
                      }
                      onHoverEnd={() =>
                        setRevealImage({
                          show: false,
                          image: route.image,
                          key: route.id,
                        })
                      }
                    >
                      <Link href={`/${route.path}`}>
                        <motion.div
                          initial={{ x: -108 }}
                          whileHover={{
                            x: -40,
                            transition: {
                              duration: 0.4,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                          className="link"
                        >
                          <span className="arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 101 57"
                            >
                              <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#FFF"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          {route.title}
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </NavList>
              <NavFooter>
                <div className="flex">
                  <p className="text-lg xxsm:text-base xsm:text-lg basesm:text-lg mdsm:text-lg basemd:text-xl baselg:text-4xl text-green-hl basemd:px-24 sbasesm:px-20 smdsm:px-20 mdsm:px-10 baselg:px-0 ssm:px-10 px-4 xsbasesm:px-16 text-left max-w-7xl mx-auto mt-32 underline text-red-400 font-semibold">
                    <a className="" href="mailto:">mail@erpgruppen.dk</a>
                    <br />
                    <a className="" href="tel:004578794040">+45 78 79 40 40</a>

                  </p>
                  <p className=" text-lg xxsm:text-sm xsm:text-base basesm:text-base mdsm:text-lg basemd:text-lg baselg:text-lg basemd:px-24 sbasesm:px-20 smdsm:px-20 mdsm:px-10 baselg:px-0 ssm:px-10 px-4 xsbasesm:px-16 text-right max-w-7xl mx-auto font-medium mt-36">
                    <a>© 2022-2022 ERP Gruppen, A/S</a>
                  </p>
                </div>
              </NavFooter>
              <NavImage>
                <motion.div
                  transition={{
                    duration: 0.4,
                    ease: [0.6, 0.05, -0.01, 0.9],
                  }}
                  animate={{ width: revealImage.show ? 0 : "99%" }}
                  className="reveal"
                ></motion.div>
                <div className="image">
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.div
                      key={revealImage.key}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src={require(`/image/nav/${revealImage.image}`)}
                        alt="Picture of the author"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </NavImage>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
