import React from "react";
import style from "./test.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../../assets/img/ourSerrvices5.png";
import img2 from "../../assets/img/ourSerrvices4.png";
import img3 from "../../assets/img/ourSerrvices3.png";
import img4 from "../../assets/img/ourSerrvices2.png";
import img5 from "../../assets/img/ourSerrvices1.png";
import "animate.css";
const Test = () => {
  return (
    <div className={style.services}>
      <div className={style.services__container}>
        <Swiper
          className={style.swiper}
          slidesPerView={"auto"}
          spaceBetween={0}
          centeredSlides={true}
          initialSlide={2}
        >
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.imageBox}>
              <img src={img2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.imageBox}>
              <img src={img1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.imageBox}>
              <img src={img3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.imageBox}>
              <img src={img4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.imageBox}>
              <img src={img5} alt="" />
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className={style.swiperSlide}>
            <div className={style.imageBox}>
              <img src={img5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.imageBox}>
              <img src={img5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.imageBox}>
              <img src={img5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.imageBox}>
              <img src={img5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.imageBox}>
              <img src={img5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.imageBox}>
              <img src={img5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.imageBox}>
              <img src={img5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.imageBox}>
              <img src={img5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.imageBox}>
              <img src={img5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.imageBox}>
              <img src={img5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.imageBox}>
              <img src={img5} alt="" />
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Test;
