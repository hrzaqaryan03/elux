import React from 'react'
import style from '../home/home.module.scss';
import Main from '../../main/Main';
import Test from '../../test/Test';
import OurServices from '../../ourServices/OurServices';
import Pricing from '../../pricing/Pricing';
import ImageBanner from '../../imageBanner/ImageBanner';
import BestTeam from '../../bestTeam/BestTeam';
const Home = () => {
  

  return (
    <div className={style.home}>
      <Main/>
      <OurServices/>
      {/* <Test/> */}
      <Pricing/>
      <ImageBanner/>
      <BestTeam/>
    </div>
  )
}

export default Home
