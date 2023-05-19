import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import style from "../styles/contact/contact.module.scss";
import { ThemeContext } from "../context/ThemeContext";

export const Contact = ({ onChange }) => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <motion.div
      key="Contact"
      initial={{ opacity: 0, x: "1000px" }}
      animate={{ opacity: 1, x: "0" }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: 0.7 }}
      className={style.contact_content}
    >
      <div className={style.contact_title}>
        <h2 style={!isDark ? { color: "#ffffff" } : {}}>CONTACT</h2>
        <img src="img/contactIcon.png" />
        <h3 style={!isDark ? { color: "#ffffff" } : {}}>
          Thank you for taking the time to view my portfolio
        </h3>
      </div>
      <div className={style.contact_itemBox}>
        <ul className={style.contact_item}>
          <li>
            <img src={isDark ? "img/location.png" : "img/location-white.png"} />
            <h3 style={!isDark ? { color: "#ffffff" } : {}}>ADDRESS</h3>
            <p style={!isDark ? { color: "#ffffff" } : {}}>경기도 의정부시</p>
          </li>
          <li>
            <img src={isDark ? "img/phone.png" : "img/phone-white.png"} />
            <h3 style={!isDark ? { color: "#ffffff" } : {}}>PHONE</h3>
            <p style={!isDark ? { color: "#ffffff" } : {}}>010 9466 5392</p>
          </li>
          <li>
            <img src={isDark ? "img/email.png" : "img/email-white.png"} />
            <h3 style={!isDark ? { color: "#ffffff" } : {}}>EMAIL</h3>
            <p style={!isDark ? { color: "#ffffff" } : {}}>wo32144@naver.com</p>
          </li>
        </ul>

        <div className={style.contact_ball}>
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.6 }}
            src="img/contact-ball.png"
          />
        </div>
      </div>
      <ul className={style.contact_bottom}>
        <li
          onClick={() => {
            onChange("Project");
          }}
        >
          <img src={isDark ? "img/arrowLeft.svg" : "img/arrowLeftDark.svg"} />
          <p style={!isDark ? { color: "#ffffff" } : {}}>PROJECT</p>
        </li>
      </ul>
    </motion.div>
  );
};
