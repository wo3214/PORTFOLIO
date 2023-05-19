import React, { useContext } from "react";
import { motion } from "framer-motion";
import style from "../../styles/about/skills.module.scss";
import { ThemeContext } from "../../context/ThemeContext";

export const Skills = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <div className={style.skills_box}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={style.ml_box}
      >
        <p style={!isDark ? { color: "#ffffff" } : {}}>MarkUp / Language</p>
        <ul>
          <li>
            <img src="img/htmlIcon.png" />
          </li>
          <li>
            <img src="img/cssIcon.png" />
          </li>
          <li>
            <img src="img/sassIcon.png" />
          </li>
          <li>
            <img src="img/jsIcon.png" />
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={style.fl_box}
      >
        <p style={!isDark ? { color: "#ffffff" } : {}}>Framework / Library</p>
        <ul>
          <li>
            <img src="img/reactIcon.png" />
          </li>
          <li>
            <img src="img/nextIcon.png" />
          </li>
          <li>
            <img src="img/framerIcon.png" />
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className={style.ot_box}
      >
        <p style={!isDark ? { color: "#ffffff" } : {}}>Other Tool</p>
        <ul>
          <li>
            <img src="img/githubIcon.png" />
          </li>
          <li>
            <img src="img/gitIcon.png" />
          </li>
          <li>
            <img src="img/figmaIcon.png" />
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className={style.db_box}
      >
        <p style={!isDark ? { color: "#ffffff" } : {}}>Database</p>
        <ul>
          <li>
            <img src="img/mongoIcon.png" />
          </li>
        </ul>
      </motion.div>
    </div>
  );
};
