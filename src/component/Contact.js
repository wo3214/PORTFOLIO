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
      <div className={style.contact_itemBox}></div>
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
