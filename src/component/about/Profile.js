import React, { useContext } from "react";
import { motion } from "framer-motion";
import style from "../../styles/about/profile.module.scss";
import { ThemeContext } from "../../context/ThemeContext";

export const Profile = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <div className={style.profile_box}>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={!isDark ? { color: "#ffffff" } : {}}
      >
        Name : 김형재
      </motion.p>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={!isDark ? { color: "#ffffff" } : {}}
      >
        Birthdate : 1992.11.08
      </motion.p>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        style={!isDark ? { color: "#ffffff" } : {}}
      >
        Phone : 010 - 9466 - 5392
      </motion.p>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        style={!isDark ? { color: "#ffffff" } : {}}
      >
        Certificate
      </motion.p>
      <motion.p
        className={style.sub_text}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        style={!isDark ? { color: "#ffffff" } : {}}
      >
        ⦁ 컴퓨터활용능력2급
        <br /> ⦁ 웹디자인기능사
        <br /> ⦁ 컴퓨터그래픽스운용기능사
      </motion.p>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        style={!isDark ? { color: "#ffffff" } : {}}
      >
        Education
      </motion.p>
      <motion.p
        className={style.sub_text}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        style={!isDark ? { color: "#ffffff" } : {}}
      >
        ⦁ 2022.11 ~ 2023.04 프로젝트기반 프론트엔드 웹&앱 <br />
        &nbsp; &nbsp;SW개발자 양성과정 그린아카데미
      </motion.p>
    </div>
  );
};
