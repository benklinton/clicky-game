import React from 'react'
import './style.css'

function Images(props) {
  return (
    <div className='img'>
      <img 
        src={`img/${props.images}`} 
        alt='Harrison Ford' 
        onClick={() => props.clicked(props.id)}>
      </img>
    </div>
  )
}

export default Images