import React, { useState, useEffect } from 'react'; // useEffect hook qo'shildi
import styles from './index.module.sass';
import { useTranslations } from "next-intl";
import { Link } from "react-scroll";
import { Lang } from '../Lang';
import Image from 'next/image';
import { Fade } from "react-reveal";

export const Navbar = () => {
  const t = useTranslations();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Ekran o'lchami o'zgarsa, menyuni yopish
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1290 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  return (
    <div className={`${styles.navbar} ${menuOpen ? styles.navbar_open : ''}`} style={{ height: menuOpen && window.innerWidth <= 1290 ? '100vh' : '131px' }}>
      <div className={styles.navbar__header}> 
        <Fade left cascade>
          <a href="/">
            <Image className={styles.navbar__logo} src={'/assets/img/logowhite.svg'} alt='logo' width={301} height={30} />
          </a>
        </Fade>
        <button className={styles.navbar__toggle} onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      <Fade right cascade>
        <div className={`${styles.navbar__section} ${menuOpen ? styles.navbar__section_open : ''}`}>
          <ul className={styles.navbar__menu}>
            <li className={styles.navbar__bar}>
              <Link
                activeClass="active"
                to="company"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={styles.navbar__link}
                onClick={toggleMenu} // Close menu on link click
              >
                {t("menu.company")}
              </Link>
            </li>
            <li className={styles.navbar__bar}>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={styles.navbar__link}
                onClick={toggleMenu} // Close menu on link click
              >
                {t("menu.services")}
              </Link>
            </li>
            <li className={styles.navbar__bar}>
              <Link
                activeClass="active"
                to="partners"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={styles.navbar__link}
                onClick={toggleMenu} // Close menu on link click
              >
                {t("menu.cases")}
              </Link>
            </li>
            <li className={styles.navbar__bar}>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={styles.navbar__link}
                onClick={toggleMenu} // Close menu on link click
              >
                {t("menu.contact")}
              </Link>
            </li>
          </ul>
          <Lang />
          <div className={styles.navbar__course}>{t("menu.courses")}</div>
        </div>
      </Fade>
    </div>
  );
};
