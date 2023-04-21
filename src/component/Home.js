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
      <div
        className={style.home_text}
        style={!isDark ? { color: "#ffffff" } : {}}
      >
        <p>FRONT-END</p>
        <p>DEVELOPER</p>
        <p>PORTFOLIO</p>
        <img src="img/homeName.png" />
      </div>
      <div className={style.home_balls}>
        <img src="img/ballTest.png" /> {/* css 처리 */}
      </div>

      <div className={style.pageMove}>
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
      </div>

      <ul className={style.bottom_text}>
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
      </ul>
    </motion.div>
  );
};
