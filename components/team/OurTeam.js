import styles from "./ourteam.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function OurTeam() {
  const navRoutes = [
    {
      id: 0,
      name: "Name 1",
      title: "Product Manager",
      positions: "Former PM for Airtable, Medium, Ghost, and Lumi.",
      path: "colleague",
      image: "girl.svg",
    },
    {
      id: 1,
      name: "Name 2",
      title: "Product Manager",
      positions: "Former PM for Airtable, Medium, Ghost, and Lumi.",
      path: "colleague",
      image: "girl.svg",
    },
    {
      id: 2,
      name: "Name 3",
      title: "Product Manager",
      positions: "Former PM for Airtable, Medium, Ghost, and Lumi.",
      path: "colleague",
      image: "girl.svg",
    },
    {
      id: 3,
      name: "Name 4",
      title: "Product Manager",
      positions: "Former PM for Airtable, Medium, Ghost, and Lumi.",
      path: "colleague",
      image: "girl.svg",
    },
    {
      id: 4,
      name: "Name 5",
      title: "Product Manager",
      positions: "Former PM for Airtable, Medium, Ghost, and Lumi.",
      path: "colleague",
      image: "girl.svg",
    },
  ];

  return (
    <div className={styles.body}>
      <div className="grid aboutlg:grid-cols-3 basemd:grid-cols-2 grid-cols-1 gap-4">
        {navRoutes.map((route) => (
          <div>
            <div className={styles.card}>
              <Image
                className=""
                src={require(`/image/${route.image}`)}
                alt="Picture of the author"
              />
              <div className={styles.cardcontent}>
                <h2 className={styles.cardtitle}>{route.name}</h2>
                <p className={styles.cardbody}>{route.title}</p>
                <p className={styles.cardbody1}>
                  {route.positions}
                </p>
                <div className={styles.icons}>
                  <img
                    className={styles.twitter}
                    href="#"
                    src="twitter.svg"
                    alt="Twitter logo"
                    width="25"
                    height="25"
                  />
                  <img
                    className={styles.linkedin}
                    href="#"
                    src="linkedin.svg"
                    alt="linkedin logo"
                    width="25"
                    height="25"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
