import React, { useEffect, useState } from 'react'
import style from './aboutMain.module.scss'
import BreadCrumb from '../breadCrumb/BreadCrumb'
const AboutMain = () => {

  const [state , setState] = useState(true)

  useEffect(() => {
    window.addEventListener('resize' , () => {
      if(window.innerWidth < 768) {
        setState(false)
      }else setState(true)
      
    })
  },[])

  return (

    <section className={style.aboutMain}>
        <div className={style.aboutMain__container}>
            <h2>
                <span>ABOUT US</span>
                <span className={style.styled}>
                Awesome Beauty salon
                </span>
            </h2>
            {state &&  <BreadCrumb/>}
          
        </div>
    </section>
  )
}

export default AboutMain