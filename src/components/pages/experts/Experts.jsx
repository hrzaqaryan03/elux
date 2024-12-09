import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const Experts = () => {




  const expertsData = useSelector((state) => state.experts.experts)

  
  

  return (
    <div style={{margin:'10px'}}>
      {expertsData.map((el,index) => {
        return (
          <Link   style={{border:'1px solid #000' , padding:'10px' , margin:'20px'}} key={el.id} to={`/experts/${el.id}`}>{el.name}</Link>
        ) 
      })}
    </div>
  )
}

export default Experts