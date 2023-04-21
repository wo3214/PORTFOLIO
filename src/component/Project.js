import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import style from "../styles/project/project.module.scss";
import { ThemeContext } from "../context/ThemeContext";

export const Project = ({ onChange }) => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <motion.div
      key="Project"
      initial={{ opacity: 0, x: "1000px" }}
      animate={{ opacity: 1, x: "0" }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: 0.7 }}
      className={style.project_content}
    >
      <div className={style.project_title}>
        <h2 style={!isDark ? { color: "#ffffff" } : {}}>PROJECTS</h2>
        <img src="img/projectIcon.png" />
      </div>
      <div className={style.project_itemBox}></div>
      <ul className={style.project_bottom}>
        <li
          onClick={() => {
            onChange("About");
          }}
        >
          <img src={isDark ? "img/arrowLeft.svg" : "img/arrowLeftDark.svg"} />
          <p style={!isDark ? { color: "#ffffff" } : {}}>ABOUT</p>
        </li>
        <li
          onClick={() => {
            onChange("Contact");
          }}
        >
          <p style={!isDark ? { color: "#ffffff" } : {}}>CONTACT</p>
          <img src={isDark ? "img/arrowRight.svg" : "img/arrowRightDark.svg"} />
        </li>
      </ul>
    </motion.div>
  );
};
