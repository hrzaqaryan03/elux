import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Blog from '../pages/blog/Blog'
import About from '../pages/about/About'
import Services from '../pages/services/Services'
import Experts from '../pages/experts/Experts'
import Contact from '../pages/contact/Contact'
const Approutes = () => {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/experts' element={<Experts/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default Approutes