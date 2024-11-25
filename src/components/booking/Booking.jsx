import React from "react";
import style from "./booking.module.scss";
import ChooseService from "../chooseService/ChooseService";
const Booking = () => {
  return (
    <div className={style.booking}>
      <div className={style.booking__container}>
        <div className={style.booking__items}>
            <ChooseService/>
          
        </div>
      </div>
    </div>
  );
};

export default Booking;
