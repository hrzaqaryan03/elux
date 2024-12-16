  import React, { useEffect, useState } from "react";
  import style from "../main/main.module.scss";
  import { useSelector } from "react-redux";
  import Booking from "../booking/Booking";
  import usePaginate from '../../hooks/usePaginate.js'
  const Main = () => {
    const images = useSelector((state) => state.main.images);

    const {goToNextPage , goToPage , currentIndex ,totalPages } = usePaginate(images)

    
    
    useEffect(() => {

      const interval = setInterval(() => {
        goToNextPage()
      },2500)

      return () => clearInterval(interval)
    } , [goToNextPage])

    const handleDotClick = (index) => {
      goToPage(index)
    }
  
    return (
      <main className={style.main}>
        <div className={style.main__container}>
          {images.map((image, index) => {
            return (
              <div
                className={style.item}
                key={index}
                style={{
                  backgroundImage: `url(${image})`,
                  opacity: index === currentIndex ? 1 : 0,
                  transition: "opacity 1700ms ease",
                }}
              
              ></div>
            );
          })}
          <div className={style.pagination}>
            <div className={style.dot_container}>
              {Array.from({length : totalPages}).map((_, index) => {
                return (
                  <span
                    className={
                      currentIndex === index
                        ? style.dot + " " + style.active
                        : style.dot
                    }
                    key={index}
                    onClick={() => handleDotClick(index)}
                  >
                    <div className={style.round}></div>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        {/* <Booking/> */}
      </main>
    );
  };

  export default Main;
