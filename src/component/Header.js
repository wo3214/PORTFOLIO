import React, { useState } from "react";
import style from "../styles/header/header.module.scss";

export const Header = () => {
  const [menuOpen, menuSetOpen] = useState(false);

  function menuSet() {
    menuSetOpen(!menuOpen);
  }

  return (
    <div className={style.header}>
      <div className={style.mode_button}>
        <div className={style.mode_ball}></div>
      </div>
      <div className={style.header_menu}>
        <ul
          className={style.menu_list}
          style={
            menuOpen
              ? { transform: "translateX(500px)" }
              : { transform: "translateX(0px)" }
          }
        >
          <li>
            <span>HOME</span>
          </li>
          <li>
            <span>ABOUT</span>
          </li>
          <li>
            <span>PROJECT</span>
          </li>
          <li>
            <span>CONTACT</span>
          </li>
        </ul>
      </div>
      <div className={style.menu_ham} onClick={menuSet}>
        <img
          src="img/menuham.svg"
          style={
            menuOpen
              ? { transform: "rotate(0deg)", transitionDelay: "0.8s" }
              : { transform: "rotate(90deg)" }
          }
        />
      </div>
    </div>
  );
};
