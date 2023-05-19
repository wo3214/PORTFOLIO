import React, { useContext } from "react";
import { motion } from "framer-motion";
import style from "../../styles/about/motto.module.scss";
import { ThemeContext } from "../../context/ThemeContext";

export const Motto = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <div className={style.motto_box}>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={!isDark ? { color: "#ffffff" } : {}}
      >
        “우직함으로 성장하는 개발자”
      </motion.p>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={!isDark ? { color: "#ffffff" } : {}}
      >
        안녕하세요, 프런트엔드 개발을 꿈꾸는 김형재입니다. <br />
        공부를 시작하면서 끝이 없는 학습의 깊이에 제자리 <br />
        걸음을 하는 느낌이 들었지만,
      </motion.p>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        style={!isDark ? { color: "#ffffff" } : {}}
      >
        이를 극복하기 위해 프로젝트를 진행하며 막히는 부분과 <br />
        문제들을 직접 부딪혀 해결해 나가며 "우직함"이라는 <br />
        가치를 깨달았습니다.
      </motion.p>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        style={!isDark ? { color: "#ffffff" } : {}}
      >
        프로젝트를 수행하면서 처음에는 시간이 오래 걸려 <br />
        힘들었지만, 끊임없는 노력과 인내로 문제를 해결해
        <br /> 나가면서 더 나은 개발자가 되고자합니다.
      </motion.p>
    </div>
  );
};
