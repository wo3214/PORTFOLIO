import React, { useContext, useRef, useState } from "react";
import style from "../../styles/project/plani.module.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay } from "swiper";
import "swiper/swiper.min.css";

import "swiper/css";

export const Moa = ({ onChange }) => {
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
          MOA
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
              <img src="img/moa/img01.png" />
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
              <img src="img/moa/img02.png" />
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
              <img src="img/moa/img03.png" />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide className={style.list_item}>
            <div
              onClick={() => {
                slideBtnChange("img04");
              }}
            >
              <img src="img/moa/img04.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.list_item}>
            <div
              onClick={() => {
                slideBtnChange("img05");
              }}
            >
              <img src="img/moa/img05.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.list_item}>
            <div
              onClick={() => {
                slideBtnChange("img06");
              }}
            >
              <img src="img/moa/img06.png" />
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
            Moa는 DALL-E와 ChatGPT를 결합하여 사용자가 특정 단어를 가상 코인으로
            구매하고,
            <br /> 이를 활용하여 단어 조합에 기반하여 인공지능 AI가 그림을
            생성해주는 웹사이트입니다.
          </p>
          <p style={!isDark ? { color: "#ffffff" } : {}}>인원 : 3인 개발</p>
          <p style={!isDark ? { color: "#ffffff" } : {}}>
            기술 스택: NextJs , Scss, JavaScript, MongoDB, Axios
          </p>
          <div style={!isDark ? { color: "#ffffff" } : {}}>
            <p>주요 특징:</p>
            <div>
              <p>
                DALL-E, ChatGPT, Auth, MongoDB등 다양한 api와 데이터베이스 활용
              </p>
              <p>
                단어를 구매하여 그림을 생성하고 저장할수 있고 다른 사용자와
                공유합니다.
              </p>
              <p> 5가지 랜덤 미션을 제공하여 코인을 획득할 수 있습니다.</p>
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
              <img src="img/moa/img01b.png" />
            </motion.li>
          )}
          {slideBtn === "img02" && (
            <motion.li
              initial={{ x: -880 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <img src="img/moa/img02b.png" />
            </motion.li>
          )}
          {slideBtn === "img03" && (
            <motion.li
              initial={{ x: -880 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <img src="img/moa/img03b.png" />
            </motion.li>
          )}
          {slideBtn === "img04" && (
            <motion.li
              initial={{ x: -880 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <img src="img/moa/img04b.png" />
            </motion.li>
          )}
          {slideBtn === "img05" && (
            <motion.li
              initial={{ x: -880 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <img src="img/moa/img05b.png" />
            </motion.li>
          )}
          {slideBtn === "img06" && (
            <motion.li
              initial={{ x: -880 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <img src="img/moa/img06b.png" />
            </motion.li>
          )}
        </ul>
        <a
          href="https://port-0-moa-nx562olf6rpmql.sel3.cloudtype.app/"
          target="_blank"
          style={!isDark ? { color: "#ffffff" } : {}}
        >
          MORE VIEW
        </a>
      </div>
    </div>
  );
};
