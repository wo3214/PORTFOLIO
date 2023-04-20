import React from "react";
import { easeIn, motion } from "framer-motion";
import style from "../styles/about/about.module.scss";

export const About = () => {
  return (
    <motion.div
      key="About"
      initial={{ opacity: 0, x: "1000px" }}
      animate={{ opacity: 1, x: "0" }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: 0.7 }}
      className={style.about_content}
    >
      Testssssssssssssssssssssssssssssssssssss
    </motion.div>
  );
};
