import React from 'react'
import style from './offers.module.scss'
import OffersIcon from '../../sharedComponents/svg/OffersIcon'
import { useSelector } from 'react-redux'


const Offers = () => {

    const {services , images} = useSelector((state) => state.offers);

    
    
  

  return (

    <section className={style.offers}>
        <div className={style.offers__container}>
            <div className={style.content}>
                <div className={style.title}>
                    <h3>Beauty salon EluX offers a range of services</h3>
                    <div className={style.title_hidden}>

                    <img src={images.first} alt="" />
                    </div>
                </div>
                <div className={style.body}>
                    <ul>
                        {services.map((el,index) => {
                           return (
                                <li key={el.id}>
                                    <div className={style.left}>
                                        <OffersIcon/>
                                    </div>
                                    <div className={style.right}>
                                        <p>{el.name}</p>
                                        <span>{el.desc}</span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className={style.images}>
                <div className={style.imageBox}>
                 
                        <div className={style.item}>
                            <img src={images.first} alt="" />
                            <img src={images.second} alt="" />
                        </div>
                    
                
                </div>
            </div>
            <div className={style.hidden}>
                <img src={images.second} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Offers