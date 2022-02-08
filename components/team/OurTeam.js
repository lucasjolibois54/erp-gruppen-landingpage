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
    {
        id: 5,
        name: "Name 6",
        title: "Product Manager",
        positions: "Former PM for Airtable, Medium, Ghost, and Lumi.",
        path: "colleague",
        image: "girl.svg",
      },
  ];

  return (
    <div className={styles.body}>
      <div className="border-b border-2 border-line mx-auto w-5/6 mt-16 aboutlg:max-w-5xl"  />
          <div>
          <h3 className="text-center max-w-4xl font-semibold mx-auto pt-40 xxsm:text-3xl ssm:text-3xl">Meet our team</h3>
                <p className="text-center max-w-4xl mx-auto max-w-xl pt-10 xxsm:mb-20 xxsm:text-md ssm:text-xl p-10">Our mission is to ensure teams can do their best work, no matter their size or budget. We focus on the details of everything we do.</p>
          </div>

      <div className="grid aboutlg:grid-cols-3 basemd:grid-cols-2 grid-cols-1 gap-4 xxsm:p-3">
        {navRoutes.map((route) => (
          <div key={route.id}>
            <div className={styles.card}>
                <div className="absolute">
              <Image
                src={require(`/image/${route.image}`)}
                alt="Picture of the author"
              />
                </div>
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
