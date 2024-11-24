import React from 'react'
import Facebook from "../../sharedComponents/svg/Facebook";
import Instagram from "../../sharedComponents/svg/Instagram";
import WhatsApp from "../../sharedComponents/svg/Instagram";
import DownIcon from "../../sharedComponents/svg/Down";
import style from '../header/header.module.scss'
import {Link} from 'react-router-dom'
const HeaderTop = () => {
  return (
    <div className={style.header_top}>
    <div className={style.header_top__container}>
      <ul className={style.icons}>
        <li>
          <Link to="https://www.facebook.com/" target="blank">
            <Facebook />
          </Link>
        </li>
        <li>
          <Link
            target="blank"
            to="https://www.instagram.com/accounts/login/?hl=en"
          >
            <Instagram />
          </Link>
        </li>
        <li>
          <Link target="blank" to="https://web.whatsapp.com/">
            <WhatsApp />
          </Link>
        </li>
      </ul>
      <ul className={style.info}>
        <li>
          <Link to="tel:+000000000" target="blank">
            <span>+0 000-00-000</span>
          </Link>
        </li>
        <li>
          <Link>
            <span>Address: Marburg, marburg</span>
          </Link>
        </li>
        <li>
          <Link>
            <span>Eng</span>
            <DownIcon />
          </Link>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default HeaderTop