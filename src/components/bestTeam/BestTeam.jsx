  import React, { useState } from 'react'
  import { Swiper , SwiperSlide} from 'swiper/react'
  import { useSelector } from 'react-redux'
  import style from './bestTeam.module.scss'
  import {Link} from 'react-router-dom'
  import { Autoplay } from 'swiper/modules'

  const BestTeam = () => {

    const experts = useSelector((state) => state.experts.experts)
    const [activeIndex , setActiveIndex] = useState(2)
    
    
  
    

    return (
      <section className={style.bestTeam}>
        <div className={style.title}>
          <div className={style.title_container}>
            <h2>
              <span>MEET THE BEST TEAM EVER</span>
              <span className={style.styled}>Team</span>
            </h2>
          </div>
        </div>
          <div className={style.body}>
              <Swiper
                className={style.swiper}
                slidesPerView={"auto"}
                spaceBetween={0}
                centeredSlides={true}
                initialSlide={2}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.activeIndex)
                  
                }}
                autoplay={{
                  delay:2500,
                  disableOnInteraction:false,
                }}
                modules={[Autoplay]}
               >
                {experts.map((el , index) => {
                  return (
                    <SwiperSlide
                    className={style.swiperSlide}
                    key={el.id}
                    >
                      <Link to={`/experts/${el.id}`}>
                      <div className={style.slideContent}
                        style={{scale:activeIndex == index ? "1.1" : "1" , transition: 'all 300ms ease' , borderRadius:'12px'}}
                      >
                        <img src={el.pic} alt={el.name} />
                      <span className={style.view}>View</span>
                      </div>
                      </Link>
                    </SwiperSlide>
                  )
                })}
                
              </Swiper>
          </div>
      </section>
    )
  }

  export default BestTeam