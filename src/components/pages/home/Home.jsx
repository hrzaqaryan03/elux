import React from 'react'
import style from '../home/home.module.scss';
import Main from '../../main/Main';
import Test from '../../test/Test';
const Home = () => {
  return (
    <div className={style.home}>
      <Main/>
    </div>
  )
}

export default Home
