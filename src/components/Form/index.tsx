// components/ContactForm.tsx

import React, { useState } from "react";
import styles from "./index.module.sass";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTranslations } from "next-intl";
import { useMediaQuery, useTheme } from "@mui/material";
import { Fade, Zoom, Flip } from "react-reveal";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export const Form: React.FC = () => {
  const t = useTranslations();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Bu erda ma'lumotlarni backenda jo'natish logikasini qo'shishingiz mumkin
    console.log("Form submitted with data:", formData);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Fade bottom cascade>
      <div className={styles.container} id="contact">
        <div className={styles.content}>
          <div className={styles.info}>
            <p className={styles.info__title}>{t("form.question")}</p>
            <p className={styles.info__description}>{t("form.contact")}</p>
            <Image
              className={styles.info__logo}
              src={"/assets/img/logoorg.svg"}
              alt="logoorg"
              width={356}
              height={32}
            />
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <TextField
              name="name"
              className={styles.form__input}
              onChange={handleChange}
              placeholder={t("form.name")}
              value={formData.name}
              variant="standard"
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottom: "1px solid #FFFFFF", // Underline color
                },
                "& .MuiInputLabel-root": {
                  color: "#5B539D",
                  fontSize: "25px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  textAlign: "center", // Center the label text
                  width: "100%", // Full width for centering
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  display: "none", // Hide label when focused
                },
                width: "700px", // Width of the TextField
                "& .MuiInputBase-root": {
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: "none",
                  color: "#FFFFFF !important",
                  // paddingLeft: isSmallScreen ? '30px' : '200px', // Adjust padding based on screen size
                  fontSize: "24px !important",
                  textAlign: "center", // Center text including placeholder
                },
                "& .MuiInputBase-input": {
                  textAlign: isSmallScreen ? 'left' : 'center',
                  padding: isSmallScreen ? '0px 20px' : '0px',
                },
              }}
            />

            <TextField
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.form__input}
              placeholder="+998 (90) 024 44 48"
              variant="standard"
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottom: "1px solid #FFFFFF", // Underline color
                },
                "& .MuiInputLabel-root": {
                  color: "#5B539D",
                  fontSize: "25px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  textAlign: "center", // Center the label text
                  width: "100%", // Full width for centering
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  display: "none", // Hide label when focused
                },
                width: "700px", // Width of the TextField
                "& .MuiInputBase-root": {
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: "none",
                  color: "#FFFFFF !important",
                  // paddingLeft: isSmallScreen ? '30px' : '200px', // Adjust padding based on screen size
                  fontSize: "24px !important",
                  textAlign: "center", // Center text including placeholder
                },
                "& .MuiInputBase-input": {
                  textAlign: isSmallScreen ? 'left' : 'center',
                  padding: isSmallScreen ? '0px 20px' : '0px',
                },
              }}
            />
            <TextField
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder={t("form.nameCompany")}
              onChange={handleChange}
              className={styles.form__input}
              variant="standard"
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottom: "1px solid #FFFFFF", // Underline color
                },
                "& .MuiInputLabel-root": {
                  color: "#5B539D",
                  fontSize: "25px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  textAlign: "center", // Center the label text
                  width: "100%", // Full width for centering
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  display: "none", // Hide label when focused
                },
                width: "700px", // Width of the TextField
                "& .MuiInputBase-root": {
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: "none",
                  color: "#FFFFFF !important",
                  // paddingLeft: isSmallScreen ? '30px' : '200px', // Adjust padding based on screen size
                  fontSize: "24px !important",
                  textAlign: "center", // Center text including placeholder
                },
                "& .MuiInputBase-input": {
                  textAlign: isSmallScreen ? 'left' : 'center',
                  padding: isSmallScreen ? '0px 20px' : '0px',
                },
              }}
            />

            <Button
              variant="contained"
              type="submit"
              className={styles.form__submit}
            >
              {t("form.send")}
            </Button>
          </form>
        </div>
      </div>
    </Fade>
  );
};
