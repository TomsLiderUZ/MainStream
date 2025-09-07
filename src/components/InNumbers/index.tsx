import React, { useEffect, useRef } from 'react';
import styles from './index.module.sass';
import { useTranslations } from "next-intl";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Fade, Zoom } from "react-reveal";


gsap.registerPlugin(ScrollTrigger);

const animateNumber = (element: HTMLElement, endValue: string) => {
  const numericValue = parseFloat(endValue.replace(/[^\d.,]/g, '').replace(',', '.'));
  const isInteger = Number.isInteger(numericValue);
  gsap.fromTo(element, 
    { innerHTML: 0 }, 
    { innerHTML: numericValue, duration: 2, ease: 'power1.inOut', 
      snap: { innerHTML: 1 }, 
      onUpdate: function() {
        if (isInteger) {
          element.innerHTML = Math.round(parseFloat(element.innerHTML)).toLocaleString();
        } else {
          element.innerHTML = parseFloat(element.innerHTML).toFixed(2).replace('.', ',');
        }
      }
    }
  );
};

export const InNumbers: React.FC = () => {
  const t = useTranslations();
  const numbersRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const elements = numbersRefs.current;

    elements.forEach((element) => {
      if (element && element.dataset.endValue) {
        ScrollTrigger.create({
          trigger: element,
          start: "top 80%",
          onEnter: () => animateNumber(element, element.dataset.endValue || ''),
          once: true
        });
      }
    });
  }, []);

  return (
    <div className={styles.numbers}>
      <p className={styles.numbers__title}>Mainstream</p>
      <p className={styles.numbers__numb}>{t("statistic.innumbers")}</p>

      <div className={styles.numbers__cards}>
        <div className={styles.numbers__cardone}>
          <p className={styles.numbers__number}>
            <span 
              className={styles.numbers__numberValue} 
              data-end-value="4" 
              ref={(el) => numbersRefs.current[0] = el}
            >
              4
            </span>
            <span className={styles.numbers__numberSuffix}>+</span>
          </p>
          <p className={styles.numbers__desc}>{t("statistic.market")}</p>
        </div>
        <div className={styles.numbers__cardone}>
          <p className={styles.numbers__numbersecond}>
            <span 
              className={styles.numbers__numberValue} 
              data-end-value="4" 
              ref={(el) => numbersRefs.current[1] = el}
            >
              4
            </span>
          </p>
          <p className={styles.numbers__descsecond}>{t("statistic.filial")}</p>
        </div>
        <div className={styles.numbers__cardone}>
          <p className={styles.numbers__number}>
            <span 
              className={styles.numbers__numberValue} 
              data-end-value="150" 
              ref={(el) => numbersRefs.current[2] = el}
            >
              150
            </span>
            <span className={styles.numbers__numberSuffix}>+</span>
          </p>
          <p className={styles.numbers__desc}>{t("statistic.projects")}</p>
        </div>
        <div className={styles.numbers__cardone}>
          <p className={styles.numbers__number}>
            <span 
              className={styles.numbers__numberValue} 
              data-end-value="15" 
              ref={(el) => numbersRefs.current[3] = el}
            >
              15
            </span>
            <span className={styles.numbers__numberSuffix}>K</span>
          </p>
          <p className={styles.numbers__desc}>{t("statistic.advertising")}</p>
        </div>
        <div className={styles.numbers__cardone}>
          <p className={styles.numbers__number}>
            <span 
              className={styles.numbers__numberValue} 
              data-end-value="25" 
              ref={(el) => numbersRefs.current[4] = el}
            >
              25
            </span>
            <span className={styles.numbers__numberSuffix}>+</span>
          </p>
          <p className={styles.numbers__desc}>{t("statistic.employees")}</p>
        </div>
        <div className={styles.numbers__cardsecond}>
          <p className={styles.numbers__numbertwo}>
            <span 
              className={styles.numbers__numberValue} 
              data-end-value="200" 
              ref={(el) => numbersRefs.current[5] = el}
            >
              200
            </span>
            <span className={styles.numbers__numberSuffix}>K</span>
          </p>
          <p className={styles.numbers__desctwo}>{t("statistic.lead")}</p>
        </div>
        <div className={styles.numbers__cardthird}>
          <p className={styles.numbers__numbertwo}>
            <span 
              className={styles.numbers__numberValue} 
              data-end-value="1126" 
              ref={(el) => numbersRefs.current[6] = el}
            >
              1,126
            </span>
            <span className={styles.numbers__numberSuffixtwo}>МЛРД</span>
          </p>
          <p className={styles.numbers__desctwo}>ПРОСМОТРОВ НА НАШИХ <br /> ВИДЕОРОЛИКАХ</p>
        </div>
        <div className={styles.numbers__cardfourt}>
          <p className={styles.numbers__numbertwo}>
            <Zoom  cascade>
            <span 
              className={styles.numbers__numberValue} 
              // data-end-value="349" 
              // ref={(el) => numbersRefs.current[7] = el}1
            >
              3,49
            </span>
            </Zoom>
            <span className={styles.numbers__numberSuffixtwo}>МЛН</span>
          </p>
          <p className={styles.numbers__desctwo}>{t("statistic.followers")}</p>
        </div>
        <div className={styles.numbers__cardfive}>
          <p className={styles.numbers__numberlast}>
          <Zoom cascade>
            <span 
              className={styles.numbers__numberValue} 
            >
              0,01
            </span>
            </Zoom>
            <span className={styles.numbers__numberSuffix}>$</span>
          </p>
          <p className={styles.numbers__desclast}>{t("statistic.cost")}</p>
        </div>
      </div>
    </div>
  );
}
