import React from 'react'
import styles from './index.module.sass'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const Footer = () => {
  const t = useTranslations()

  return (
    <div className={styles.footer}>
      <div className={styles.footer__location}>
        <p className={styles.footer__number}>+998 90 908 10 85</p>
        <p className={styles.footer__number}>+998 90 024 44 48</p>
        <p className={styles.footer__email}>mainstream.uz@gmail.com</p>
        <p className={styles.footer__adress}>{t("footer.adress")}</p>
      </div>

      <div className={styles.footer__social}>
        <Image className={styles.footer__streamlogo} src={'/assets/img/bigmainlogo.svg'} alt='screen' width={260} height={144}/>
        <div className={styles.footer__text}>
        </div>
        
      </div>
    </div>
  )
}
