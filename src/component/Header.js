import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import style from "../styles/header/header.module.scss";

export const Header = ({ onChange }) => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const [menuOpen, menuSetOpen] = useState(false);

  function menuSet() {
    menuSetOpen(!menuOpen);
  } /* 메뉴 버튼 */

  function ThemeBtn() {
    setIsDark(!isDark);
  } /* 다크모드 버튼 */

  return (
    <div className={style.header}>
      <div
        className={style.mode_button}
        onClick={ThemeBtn}
        style={!isDark ? { backgroundColor: "#FFFFFF" } : {}}
      >
        <div
          className={style.mode_ball}
          style={
            !isDark
              ? { backgroundColor: "#262626", transform: "translateX(114%)" }
              : {}
          }
        ></div>
      </div>{" "}
      {/* 테마버튼 */}
      <div className={style.right_box}>
        <div className={style.header_menu}>
          <ul
            className={style.menu_list}
            style={
              menuOpen
                ? {
                    transform: "translateX(0px)",
                  }
                : {
                    transform: "translateX(500px)",
                  }
            }
          >
            <li>
              <span
                style={!isDark ? { color: "#ffffff" } : {}}
                onClick={() => {
                  onChange("Home");
                }}
              >
                HOME
              </span>
            </li>
            <li>
              <span
                style={!isDark ? { color: "#ffffff" } : {}}
                onClick={() => {
                  onChange("About");
                }}
              >
                ABOUT
              </span>
            </li>
            <li>
              <span
                style={!isDark ? { color: "#ffffff" } : {}}
                onClick={() => {
                  onChange("Project");
                }}
              >
                PROJECT
              </span>
            </li>
            <li>
              <span
                style={!isDark ? { color: "#ffffff" } : {}}
                onClick={() => {
                  onChange("Contact");
                }}
              >
                CONTACT
              </span>
            </li>
          </ul>
        </div>{" "}
        {/* 헤더 메뉴 */}
        <div className={style.menu_ham} onClick={menuSet}>
          <img
            src={isDark ? "img/menuham.svg" : "img/menuham_Dark.svg"}
            style={
              menuOpen
                ? {
                    transform: "rotate(90deg)",
                  }
                : {
                    transform: "rotate(0deg)",
                    transitionDelay: "0.6s",
                  }
            }
          />
        </div>{" "}
        {/* 햄버거메뉴 */}
      </div>
    </div>
  );
};
