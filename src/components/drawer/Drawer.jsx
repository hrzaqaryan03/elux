import React from "react";
import style from "./drawer.module.scss"; // Create a separate SCSS file for drawer styling
import { Link } from "react-router-dom";
import Right from "../../sharedComponents/svg/Right";
import Facebook from "../../sharedComponents/svg/Facebook";
import Instagram from "../../sharedComponents/svg/Instagram";
import WhatsApp from "../../sharedComponents/svg/WhatsApp";
const Drawer = ({ isOpen, onClose }) => {
  return (
    <div className={`${style.drawer} ${isOpen ? style.open : ""}`}>
      <div className={style.overlay} onClick={onClose}></div>
      <div className={style.menu}>
        <ul>
          <li>
            <Link to="/services" onClick={onClose}>
              <span>Services</span>
              <Right />
            </Link>
          </li>
          <li>
            <Link to="/experts" onClick={onClose}>
              <span>Experts</span>
              <Right />
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={onClose}>
              <span>About</span>
              <Right />
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={onClose}>
              <span>Blog</span>
              <Right />
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={onClose}>
              <span>Contact</span>
              <Right />
            </Link>
          </li>
        </ul>
        <div className={style.icons}>
          <Link to="https://www.facebook.com/" target="blank">
            <Facebook/>
          </Link>
          <Link  to="https://www.instagram.com/accounts/login/?hl=en" target="blank">
            <Instagram/>
          </Link>
          <Link to="https://web.whatsapp.com/" target="blank">
            <WhatsApp/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
