import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./style.module.scss";
import SideNavbar from "../SideNavbar";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";

const Header: React.FC = () => {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = React.useState<number | undefined>(
    undefined
  );
  const [sideNavbar, setSideNavbar] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth !== undefined && windowWidth <= 500;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" passHref className={styles.link}>
          <span
            className={router.pathname === "/" ? styles.active : styles.name}
          >
            Farida Aghayeva
          </span>
        </Link>

        {!isMobile && (
          <div>
            <Link href="/AboutMe" passHref className={styles.link}>
              <span
                className={router.pathname === "/AboutMe" ? styles.active : ""}
              >
                About
              </span>
            </Link>
            <Link href="/Experience" passHref className={styles.link}>
              <span
                className={
                  router.pathname === "/Experience" ? styles.active : ""
                }
              >
                Experience
              </span>
            </Link>
            <Link href="/Portfolio" passHref className={styles.link}>
              <span
                className={
                  router.pathname === "/Portfolio" ? styles.active : ""
                }
              >
                Portfolio
              </span>
            </Link>
            <Link href="/Skills" passHref className={styles.link}>
              <span
                className={router.pathname === "/Skills" ? styles.active : ""}
              >
                Skills
              </span>
            </Link>
            <Link href="/Achievements" passHref className={styles.link}>
              <span
                className={
                  router.pathname === "/Achievements" ? styles.active : ""
                }
              >
                Achievements
              </span>
            </Link>
            <Link href="/Blogs" passHref className={styles.link}>
              <span
                className={router.pathname === "/Blogs" ? styles.active : ""}
              >
                Blogs
              </span>
            </Link>
            <Link href="/Contact" passHref className={styles.link}>
              <span
                className={router.pathname === "/Contact" ? styles.active : ""}
              >
                Contact
              </span>
            </Link>
          </div>
        )}

        {isMobile && (
          <div className={styles.sideNavbar}>
            {sideNavbar ? (
              <div
                onClick={() => setSideNavbar(false)}
                className={styles.close}
              >
                <RiCloseLargeFill className={styles.icon} />
                <SideNavbar />
              </div>
            ) : (
              <div onClick={() => setSideNavbar(true)}>
                <RxHamburgerMenu />
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
