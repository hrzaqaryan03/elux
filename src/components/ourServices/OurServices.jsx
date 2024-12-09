import React, { useEffect, useState } from "react";
import style from "./ourServices.module.scss";
import { motion, useAnimation } from "framer-motion";
import img1 from "../../assets/img/ourSerrvices5.png";
import img2 from "../../assets/img/ourSerrvices4.png";
import img3 from "../../assets/img/ourSerrvices3.png";
import img4 from "../../assets/img/ourSerrvices2.png";
import img5 from "../../assets/img/ourSerrvices1.png";
import Test from "../test/Test";
import ExploreMore from "../../sharedComponents/buttons/ExploreMore";
const OurServices = () => {
  const [isSwiperActive, setIsSwiperActive] = useState(true);

  const gap = "10px";
  const redControls = useAnimation();
  const greenControls = useAnimation();
  const yellowConrols = useAnimation();
  const blueControls = useAnimation();
  const blackControls = useAnimation();
  useEffect(() => {
    redControls.start({ translateY: "0px", opacity: 1 }).then(() => {
      redControls.start({ translateX: "-100%" });
    });
    greenControls.start({ translateY: "0px", opacity: 1 }).then(() => {
      greenControls.start({ translateX: "-200%" });
    });
    yellowConrols.start({ translateY: "0px", opacity: 1 }).then(() => {
      yellowConrols.start({ translateX: "100%" });
    });
    blueControls.start({ translateY: "0px", opacity: 1 });
    blackControls.start({ translateY: "0px", opacity: 1 }).then(() => {
      blackControls.start({ translateX: "200%" });
    });
  }, [redControls]);

  useEffect(() => {
    setTimeout(() => {
      setIsSwiperActive(!isSwiperActive);
    }, 2500);
  }, []);

  return (
    <section className={style.ourServices}>
      <div className={style.ourServices__container}>
        <motion.div
          initial={{ translateX: "-400px", opacity: 0 }}
          animate={{ translateX: "0px", opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={style.title}
        >
          <h2>
            <span>OUR SERVICES</span>
            <span className={style.styled}>Awersome services</span>
          </h2>
        </motion.div>
        {isSwiperActive ? (
          <div className={style.imageBox}>
            <div className={style.imageBox__container}>
              <motion.div
                className={style.red}
                initial={{ translateY: "-400px", opacity: 0 }}
                animate={redControls}
                transition={{ duration: 1 }}
              >
                <img src={img1} alt="" />
              </motion.div>
              <motion.div
                className={style.green}
                initial={{ translateY: "-400px", opacity: 0 }}
                animate={greenControls}
                transition={{ duration: 1 }}
              >
                <img src={img2} alt="" />
              </motion.div>
              <motion.div
                className={style.yellow}
                initial={{ translateY: "-400px", opacity: 0 }}
                animate={blueControls}
                transition={{ duration: 1 }}
                style={{ zIndex: 1 }}
              >
                <img src={img3} alt="" />
              </motion.div>
              <motion.div
                className={style.blue}
                initial={{ translateY: "400px", opacity: 0 }}
                animate={yellowConrols}
                transition={{ duration: 1 }}
              >
                <img src={img4} alt="" />
              </motion.div>
              <motion.div
                className={style.black}
                initial={{ translateY: "-400px", opacity: 0 }}
                animate={blackControls}
                transition={{ duration: 1 }}
              >
                <img src={img5} alt="" />
              </motion.div>
              <motion.div
                className={style.black}
                initial={{ translateY: "-400px", opacity: 0 }}
                animate={blackControls}
                transition={{ duration: 1 }}
              >
                <img src={img5} alt="" />
              </motion.div>
              <motion.div
                className={style.black}
                initial={{ translateY: "-400px", opacity: 0 }}
                animate={blackControls}
                transition={{ duration: 1 }}
              >
                <img src={img5} alt="" />
              </motion.div>
              <motion.div
                className={style.black}
                initial={{ translateY: "-400px", opacity: 0 }}
                animate={blackControls}
                transition={{ duration: 1 }}
              >
                <img src={img5} alt="" />
              </motion.div>
            </div>
          </div>
        ) : (
          <div>
            <Test></Test>
          </div>
        )}
        
        <motion.div 
          initial={{translateY:'400px' , opacity:0}}
          animate={{translateY:'0px' , opacity:1}}
          transition={{duration:1}}
          className={style.btn}
        >
          <ExploreMore/>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
