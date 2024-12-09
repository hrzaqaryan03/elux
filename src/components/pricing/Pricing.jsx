import React from "react";
import style from "./pricing.module.scss";
import { useSelector } from "react-redux";
import Icon from "../../sharedComponents/svg/EuroIcon";
import img1 from "../../assets/img/pricing1.png";
import ExploreMore from "../../sharedComponents/buttons/ExploreMore";

const Pricing = () => {
  const services = useSelector((state) => state.pricing.services);
  const images = useSelector((state) => state.pricing.images);

  return (
    <section className={style.pricing}>
      <div className={style.pricing__container}>
        <div className={style.pricing_content_container}>
          <div className={style.title}>
            <h2>
              <span>PRICING FOR SERVICE</span>
              <span className={style.styled}>Prices</span>
            </h2>
            <p className={style.desc}>
              {" "}
              The best jobs at the best prices only with us, Elux Beauty Salon.
            </p>
          </div>
          <div className={style.pricing_list}>
            <ul>
              {services.map((el) => {
                return (
                  <li key={el.id}>
                    <div className={style.top}>
                      <p>{el.name}</p>
                      <div className={style.line}></div>
                      <div className={style.prices}>
                        {el.sale && (
                          <span className={style.sale}>
                            {el.sale}
                            <Icon />
                          </span>
                        )}
                        <span>
                          {el.priceRange}
                          <Icon />
                        </span>
                      </div>
                    </div>
                    <div className={style.bottom}>
                      <span>{el.description}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={style.info1}>
          <div className={style.info1__container}>
            <div className={style.info_item}>
              <div>
                <p>years</p>
                <p>of experians</p>
              </div>
              <div>
                <span>1</span>
                <span>+</span>
              </div>
            </div>
            <div className={style.info_item}>
              <div>
                <p>happy</p>
                <p>clients</p>
              </div>
              <div>
                <span>1</span>
                <span>k</span>
              </div>
            </div>
            <div className={style.info_item}>
              <div>
                <p>we made beauty</p>
                <p>procedures</p>
              </div>
              <div>
                <span>1</span>
                <span>b</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.info2}>
          <div className={style.info2__container}>
            <div className={style.imageBox}>
              <img src={img1} alt="" />
            </div>
            <div className={style.content}>
              <div className={style.content__title}>
                <h2>
                  <span>Awesome warm words about ELUX studio</span>
                  <span className={style.styled}>About</span>
                </h2>
              </div>
              <div className={style.content__middle}>
                <p>
                  In a laoreet purus. Integer turpis quam, laoreet id orci nec,
                  ultrices lacinia nunc. Aliquam erat vo
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className={style.content__bottom}>
                <ExploreMore />
              </div>
            </div>
          </div>
        </div>
        <div className={style.bottom_images}>
          <div className={style.bottom_images_container}>
            {images.map((el, index) => {
              return (
                <div key={index}>
                  <img src={el} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
