import React, { useEffect, useRef } from 'react';
import styles from './index.module.sass';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Work = () => {
    const t = useTranslations();

    return (
        <div className={styles.work}>
            <div className={styles.work__title}>{t("statistic.workStages.title")}</div>
            <div className={styles.work__section}>
                <div className={styles.work__stage}>
                    <div className={styles.work__info}>
                        <p className={styles.work__numberone}>1</p>
                        <p className={styles.work__descone}>{t("statistic.workStages.audit")}</p>
                    </div>
                    <div className={styles.work__info}>
                        <p className={styles.work__number}>2</p>
                        <p className={styles.work__desc}>{t("statistic.workStages.budjet")}</p>
                    </div>
                    <div className={styles.work__info}>
                        <p className={styles.work__number}>3</p>
                        <p className={styles.work__desc}>{t("statistic.workStages.KPI")}</p>
                    </div>
                    <div className={styles.work__info}>
                        <p className={styles.work__number}>4</p>
                        <p className={styles.work__desctwo}>{t("statistic.workStages.media")}</p>
                    </div>
                    <div className={styles.work__info}>
                        <p className={styles.work__numberlast}>5</p>
                        <p className={styles.work__desclast}>{t("statistic.workStages.implementation")}</p>
                    </div>
                </div>
                <p className={styles.work__subtitle}>{t("statistic.workStages.regulations")}</p>
            </div>
            <div className={styles.work__sectiontwo}></div>
        </div>
    );
};
