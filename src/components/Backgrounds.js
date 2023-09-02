import React from 'react'
import './Backgrounds.css'

const Backgrounds = (props) => {
  return (
    <div className='background'>
        <div className='container title'>
            <h2>{props.title}</h2>
        </div>
    </div>
  )
}

export default Backgrounds