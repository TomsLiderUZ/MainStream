import React from "react";
import styles from "./index.module.sass";
import { useTranslations } from "next-intl";
import { Fade, Zoom, Flip } from "react-reveal";

export const SMM = () => {
  const t = useTranslations();

  return (
    <Fade cascade>
      <div className={styles.container}>
        <div className={styles.container__smm}>
          <video
            autoPlay
            loop
            muted
            src="/assets/video/smm_phones.mp4"
            controls={false}
            draggable={false}
            onContextMenu={e => e.preventDefault()}
          />
        </div>
      </div>
    </Fade>
  );
};
