import React, { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import style from "../../styles/project/project.module.scss";
import { ThemeContext } from "../../context/ThemeContext";

export const Project = ({ onChange }) => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const [overView, setOverView] = useState("plani");

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
      <div className={style.project_itemBox}>
        <div className={style.project_viewimg}>
          <div className={style.project_imgBox}>
            <AnimatePresence mode="wait">
              {overView === "plani" && (
                <motion.div
                  key={"1"}
                  className={style.div1}
                  initial={{ opacity: 0, y: "-330px" }}
                  animate={{ opacity: 1, y: "0px" }}
                  transition={{ duration: 0.4 }}
                  exit={{ opacity: 0, y: "330px" }}
                  onClick={() => {
                    onChange("Plani");
                  }}
                >
                  <img src="img/planiView.png" />
                </motion.div>
              )}
              {overView === "poke" && (
                <motion.div
                  key={"2"}
                  className={style.div2}
                  initial={{ opacity: 0, y: "-330px" }}
                  animate={{ opacity: 1, y: "0px" }}
                  transition={{ duration: 0.4 }}
                  exit={{ opacity: 0, y: "330px" }}
                  onClick={() => {
                    onChange("Poke");
                  }}
                >
                  <img src="img/pokeView.png" />
                </motion.div>
              )}
              {overView === "moa" && (
                <motion.div
                  key={"3"}
                  className={style.div3}
                  initial={{ opacity: 0, y: "-330px" }}
                  animate={{ opacity: 1, y: "0px" }}
                  transition={{ duration: 0.4 }}
                  exit={{ opacity: 0, y: "330px" }}
                  onClick={() => {
                    onChange("Moa");
                  }}
                >
                  <img src="img/moaView.png" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <p style={!isDark ? { color: "#ffffff" } : {}}>
            You can click to view more details.
          </p>
        </div>
        <ul className={style.project_list}>
          <li
            onMouseOver={() => setOverView("plani")}
            style={!isDark ? { borderColor: "#ffffff" } : {}}
            onClick={() => {
              onChange("Plani");
            }}
          >
            <p style={!isDark ? { color: "#ffffff" } : {}}>PLANI</p>
            <p style={!isDark ? { color: "#ffffff" } : {}}>Clone Project</p>
            <p style={!isDark ? { color: "#ffffff" } : {}}>01</p>
          </li>
          <li
            onMouseOver={() => setOverView("poke")}
            style={!isDark ? { borderColor: "#ffffff" } : {}}
            onClick={() => {
              onChange("Poke");
            }}
          >
            <p style={!isDark ? { color: "#ffffff" } : {}}>POKE</p>
            <p style={!isDark ? { color: "#ffffff" } : {}}>React Project</p>
            <p style={!isDark ? { color: "#ffffff" } : {}}>02</p>
          </li>
          <li
            onMouseOver={() => setOverView("moa")}
            style={!isDark ? { borderColor: "#ffffff" } : {}}
            onClick={() => {
              onChange("Moa");
            }}
          >
            <p style={!isDark ? { color: "#ffffff" } : {}}>MOA</p>
            <p style={!isDark ? { color: "#ffffff" } : {}}>Next Team Project</p>
            <p style={!isDark ? { color: "#ffffff" } : {}}>03</p>
          </li>
        </ul>
      </div>
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
