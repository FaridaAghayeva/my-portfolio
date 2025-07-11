import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./style.module.scss";

const SideNavbar: React.FC = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/AboutMe" passHref>
          <span className={router.pathname === "/AboutMe" ? styles.active : ""}>
            About
          </span>
        </Link>
        <hr style={{ color: "rgb(240,95,151)" }}></hr>
        <Link href="/Experience" passHref>
          <span
            className={router.pathname === "/Experience" ? styles.active : ""}
          >
            Experience
          </span>
        </Link>{" "}
        <hr style={{ color: "rgb(240,95,151)" }}></hr>
        <Link href="/Portfolio" passHref>
          <span
            className={router.pathname === "/Portfolio" ? styles.active : ""}
          >
            Portfolio
          </span>
        </Link>{" "}
        <hr style={{ color: "rgb(240,95,151)" }}></hr>
        <Link href="/Skills" passHref>
          <span className={router.pathname === "/Skills" ? styles.active : ""}>
            Skills
          </span>
        </Link>{" "}
        <hr style={{ color: "rgb(240,95,151)" }}></hr>
        <Link href="/Achievements" passHref>
          <span
            className={router.pathname === "/Achievements" ? styles.active : ""}
          >
            Achievements
          </span>
        </Link>{" "}
        <hr style={{ color: "rgb(240,95,151)" }}></hr>
        <Link href="/Blogs" passHref>
          <span className={router.pathname === "/Blogs" ? styles.active : ""}>
            Blogs
          </span>
        </Link>{" "}
        <hr style={{ color: "rgb(240,95,151)" }}></hr>
        <Link href="/Contact" passHref>
          <span className={router.pathname === "/Contact" ? styles.active : ""}>
            Contact
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default SideNavbar;
