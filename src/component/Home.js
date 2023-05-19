import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import style from "../styles/home/home.module.scss";
import { motion } from "framer-motion";

export const Home = ({ onChange }) => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <motion.div
      className={style.home_content}
      key="Home"
      initial={{ opacity: 0, x: "1000px" }}
      animate={{ opacity: 1, x: "0" }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: 0.7 }}
    >
      <motion.div
        className={style.home_text}
        style={!isDark ? { color: "#ffffff" } : {}}
        initial={{ opacity: 0, y: "50px" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: 1.6 }}
      >
        <p>FRONT-END</p>
        <p>DEVELOPER</p>
        <p>PORTFOLIO</p>
        <img src="img/homeName.png" />
      </motion.div>
      <div className={style.home_balls}>
        <div className={style.orangeBall}></div>
        <div className={style.purpleBall}></div>
        <div className={style.greenBall}></div>
      </div>

      <motion.div
        className={style.pageMove}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.7,
          repeat: Infinity,
          repeatDelay: 1,
          delay: 2,
        }}
      >
        <p
          style={!isDark ? { color: "#ffffff" } : {}}
          onClick={() => {
            onChange("About");
          }}
        >
          Next Page
        </p>
        <img
          src={isDark ? "img/arrowRight.svg" : "img/arrowRightDark.svg"}
          onClick={() => {
            onChange("About");
          }}
        />
      </motion.div>

      <motion.ul
        className={style.bottom_text}
        initial={{ opacity: 0, y: "50px" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: 1.6 }}
      >
        <li>
          <p style={!isDark ? { color: "#ffffff" } : {}}>
            THIS PAGE IS A SITE CREATED FOR PERSONAL <br />
            PORTFOLIO, NOT FOR COMMERCIAL PURPOSES.
          </p>
        </li>
        <li>
          <p style={!isDark ? { color: "#ffffff" } : {}}>
            KIM HYUNG JAE ⓒ 2023 PORTFOLIO
          </p>
        </li>
      </motion.ul>
    </motion.div>
  );
};
