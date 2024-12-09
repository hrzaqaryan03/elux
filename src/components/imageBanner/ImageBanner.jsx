import React from "react";
import style from "./imageBanner.module.scss";
import BookBtn from "../../sharedComponents/buttons/BookBtn";
const ImageBanner = () => {
  return (
    <section className={style.imageBanner}>
        <div className={style.effect}>
      <div className={style.imageBanner__container}>
        <p>Feel better & better with ELUX studio</p>
        <span>
          Where elegance meets expertise. Our dedicated team of professionals is
          here to pamper you with personalized treatments, transforming your
          look and enhancing your natural beauty.
        </span>
        <BookBtn/>
      </div>

        </div>
    </section>
  );
};

export default ImageBanner;
