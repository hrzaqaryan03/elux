import React from "react";
import style from "./subscribe.module.scss";
import { useForm } from "react-hook-form";



const Subscribe = () => {


    const {register , handleSubmit , formState:{errors}} = useForm()


   
  return (
    <section className={style.subscribe}>
      <div className={style.subscribe_container}>
        <div className={style.content}>
          <div className={style.title}>
            <h2>
              <span>SUBSCRIBE</span>
              <span className={style.styled}>Elux</span>
            </h2>
            <span>
              Subscribe to our newsletter for expert beauty tips and salon news
            </span>
          </div>
          <div className={style.body}>
            <form></form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
