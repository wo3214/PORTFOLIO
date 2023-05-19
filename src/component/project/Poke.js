import React, { useContext, useRef, useState } from "react";
import style from "../../styles/project/plani.module.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay } from "swiper";
import "swiper/swiper.min.css";

import "swiper/css";

export const Poke = ({ onChange }) => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const [slideBtn, setSlideBtn] = useState("img01");

  const slideBtnChange = (content) => {
    setSlideBtn(content);
  };

  return (
    <div className={style.plani_content}>
      <div className={style.plani_leftBox}>
        <motion.p
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
          style={!isDark ? { color: "#ffffff" } : {}}
        >
          This is the overview <br /> of this project
        </motion.p>
        <motion.h2
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
          style={!isDark ? { color: "#ffffff" } : {}}
        >
          POKE
        </motion.h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className={style.plani_list}
          breakpoints={{
            474: { slidesPerView: 3, spaceBetween: 10 },
            1023: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1404: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className={style.list_item}>
            <motion.div
              initial={{ x: -220 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
              onClick={() => {
                slideBtnChange("img01");
              }}
            >
              <img src="img/poke/img01.png" />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide className={style.list_item}>
            <motion.div
              initial={{ x: -440 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.4, ease: [0, 0.71, 0.2, 1.01] }}
              onClick={() => {
                slideBtnChange("img02");
              }}
            >
              <img src="img/poke/img02.png" />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide className={style.list_item}>
            <motion.div
              initial={{ x: -660 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
              onClick={() => {
                slideBtnChange("img03");
              }}
            >
              <img src="img/poke/img03.png" />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide className={style.list_item}>
            <div
              onClick={() => {
                slideBtnChange("img04");
              }}
            >
              <img src="img/poke/img04.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.list_item}>
            <div
              onClick={() => {
                slideBtnChange("img05");
              }}
            >
              <img src="img/poke/img05.png" />
            </div>
          </SwiperSlide>
        </Swiper>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
          className={style.plani_text}
        >
          <p style={!isDark ? { color: "#ffffff" } : {}}>
            Poke API를 활용하여 1세대 포켓몬들의 기본 정보를 도감 형식으로
            제공하며, <br /> 포켓몬 디바이스 디자인의 컨셉으로 구성된
            웹사이트입니다.
          </p>
          <p style={!isDark ? { color: "#ffffff" } : {}}>인원 : 1인 개발</p>
          <p style={!isDark ? { color: "#ffffff" } : {}}>
            기술 스택: React , Scss, JavaScript, Slick, Axios
          </p>
          <div style={!isDark ? { color: "#ffffff" } : {}}>
            <p>주요 특징:</p>
            <div>
              <p> Axios를 활용하여 Poke API 데이터를 받아 제공</p>
              <p>포켓몬의 상세 정보 모달과 좋아요 구현</p>
              <p>좋아하는 포켓몬을 리스트 추가, 삭제 기능</p>
            </div>
          </div>
        </motion.div>

        <ul className={style.plani_bottom}>
          <li
            onClick={() => {
              onChange("Project");
            }}
          >
            <img src={isDark ? "img/arrowLeft.svg" : "img/arrowLeftDark.svg"} />
            <p style={!isDark ? { color: "#ffffff" } : {}}>Back List</p>
          </li>
        </ul>
      </div>
      <div className={style.plani_rightBox}>
        <ul className={style.plani_overView}>
          {slideBtn === "img01" && (
            <motion.li
              initial={{ x: -880 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <img src="img/poke/img01b.png" />
            </motion.li>
          )}
          {slideBtn === "img02" && (
            <motion.li
              initial={{ x: -880 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <img src="img/poke/img02b.png" />
            </motion.li>
          )}
          {slideBtn === "img03" && (
            <motion.li
              initial={{ x: -880 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <img src="img/poke/img03b.png" />
            </motion.li>
          )}
          {slideBtn === "img04" && (
            <motion.li
              initial={{ x: -880 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <img src="img/poke/img04b.png" />
            </motion.li>
          )}
          {slideBtn === "img05" && (
            <motion.li
              initial={{ x: -880 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <img src="img/poke/img05b.png" />
            </motion.li>
          )}
          {slideBtn === "img06" && (
            <motion.li
              initial={{ x: -880 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <img src="img/poke/img06b.png" />
            </motion.li>
          )}
        </ul>
        <a
          href="https://wo3214.github.io/poke/#/"
          target="_blank"
          style={!isDark ? { color: "#ffffff" } : {}}
        >
          MORE VIEW
        </a>
      </div>
    </div>
  );
};
