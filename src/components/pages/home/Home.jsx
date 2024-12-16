import React from 'react'
import style from '../home/home.module.scss';
import Main from '../../main/Main';
import Test from '../../test/Test';
import OurServices from '../../ourServices/OurServices';
import Pricing from '../../pricing/Pricing';
import ImageBanner from '../../imageBanner/ImageBanner';
import BestTeam from '../../bestTeam/BestTeam';
import CustomerReport from '../../customerReport/CustomerReport';
const Home = () => {
  

  return (
    <div className={style.home} style={{backgroundColor:'#fbf7f2'}}>
      <Main/>
      <OurServices/>
      {/* <Test/> */}
      <Pricing/>
      <ImageBanner/>
      <BestTeam/>
      <CustomerReport/>
    </div>
  )
}

export default Home
