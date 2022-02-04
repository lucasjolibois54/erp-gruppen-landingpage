import { useState } from "react";
import { Container, Flex } from "../styles/globalStyles";
import {
  Nav,
  NavHeader,
  CloseNav,
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
    title: "not humble",
    path: "not-humble",
    image: "image.jpg",
  },
  {
    id: 1,
    title: "bleeping easy",
    path: "bleeping-easy",
    image: "image.jpg",
  },
  {
    id: 2,
    title: "make it zero",
    path: "make-it-zero",
    image: "image.jpg",
  },
  {
    id: 3,
    title: "it takes an island",
    path: "it-takes-an-island",
    image: "image.jpg",
  },
  {
    id: 4,
    title: "50 beaches",
    path: "50-beaches",
    image: "image.jpg",
  },
];

const Navigation = ({ toggleMenu, setToggleMenu }) => {
  const [revealImage, setRevealImage] = useState({
    show: false,
    image: "image.jpg",
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
              duration: .8,
              ease: [ 0.6, 0.05, -0.01, 0.9]
            }}
          >
            <Container>
              <NavHeader>
                <Flex>
                  <h2></h2>
                  <CloseNav onClick={() => setToggleMenu(!toggleMenu)}>
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
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
                      <Link href={`/projects/${route.path}`}>
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
              <NavFooter>Footer</NavFooter>
              <NavImage>
                <motion.div
                  animate={{ width: revealImage.show ? 0 : "100%" }}
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
                        src={require(`../image/${revealImage.image}`)}
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
