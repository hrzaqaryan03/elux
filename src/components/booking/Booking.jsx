import React from 'react'
import style from '../booking/booking.module.scss';
import ChooseService from '../chooseService/ChooseService';
const Booking = () => {
  return (
    <div className={style.booking}>
        <ChooseService/>
    </div>
  )
}

export default Booking