import React, { useEffect, useState } from "react";
import style from "../main/main.module.scss";
import { useSelector } from "react-redux";
import Booking from "../booking/Booking";
const Main = () => {
  const images = useSelector((state) => state.main.images);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [manualChange , setManualChange] = useState(false)


  useEffect(() => {

    if(!manualChange) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      
          return () => clearInterval(interval);
    }

  }, [images.length , manualChange]);


  const handleDotClick = (index) => {
    setCurrentIndex(index)
    setManualChange(true)

    setTimeout(() => setManualChange(false) , 3000)
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
            {images.map((_, index) => {
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
        <Booking/>
      </div>
    </main>
  );
};

export default Main;
