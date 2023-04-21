import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import style from "../styles/about/about.module.scss";
import { ThemeContext } from "../context/ThemeContext";

export const About = ({ onChange }) => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <motion.div
      key="About"
      initial={{ opacity: 0, x: "1000px" }}
      animate={{ opacity: 1, x: "0" }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: 0.7 }}
      className={style.about_content}
    >
      <div className={style.about_title}>
        <h2 style={!isDark ? { color: "#ffffff" } : {}}>ABOUT ME</h2>
        <img src="img/aboutIcon.png" />
        <h3 style={!isDark ? { color: "#ffffff" } : {}}>
          Hello and welcome to my introduction page
        </h3>
      </div>
      <div className={style.about_itemBox}></div>
      <ul className={style.about_bottom}>
        <li
          onClick={() => {
            onChange("Home");
          }}
        >
          <img src={isDark ? "img/arrowLeft.svg" : "img/arrowLeftDark.svg"} />
          <p style={!isDark ? { color: "#ffffff" } : {}}>HOME</p>
        </li>
        <li
          onClick={() => {
            onChange("Project");
          }}
        >
          <p style={!isDark ? { color: "#ffffff" } : {}}>PROJECT</p>
          <img src={isDark ? "img/arrowRight.svg" : "img/arrowRightDark.svg"} />
        </li>
      </ul>
    </motion.div>
  );
};
