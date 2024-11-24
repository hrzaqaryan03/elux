import React, { useState } from 'react'
import style from '../switcher/switcher.module.scss';
const Switcher = () => {

    const [isOn , setIsOn] = useState(true)

    const handleToggle = () => {
        const newState = !isOn
        setIsOn(newState)
    }

  return (
    <div className={ isOn ? style.switcher + " " + style.on : style.switcher} onClick={() => handleToggle()}>
        <div className={style.round}></div>
    </div>


  )
}

export default Switcher



