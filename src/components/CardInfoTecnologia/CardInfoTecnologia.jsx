/* eslint-disable react/prop-types */

import { useState } from 'react';
import './CardInfoTecnologia.css'


function CardInfoTecnologia({color, imagen, imagenHover, tecnologia, experiencia, ...props}) {

  const stylesHover = {
    padding:"14px",
    paddingLeft: "26px",
    paddingRight: "26px",
 
    borderRadius: '6px',
    border:`solid 4px ${color}`
  };

const stylesLeave ={
    padding:"18px",
    paddingLeft: "30px",
    paddingRight: "30px"
}
const [isHoverStyle, setIsHoverStyle] = useState(stylesLeave)

const [imagenMostrar, setImagenMostrar] = useState(imagen)

const efectosHover = ()=>{
  
  setIsHoverStyle(stylesHover)
  setImagenMostrar(imagenHover)
}
const efectosHoverLeave = ()=>{

  setIsHoverStyle(stylesLeave)
  setImagenMostrar(imagen)
}


  
  return (
    <div style={isHoverStyle}>
      <div className="card_info_tecnologia" {...props} onMouseOver={efectosHover} onMouseOut={efectosHoverLeave}>
        <div className="cont-img-skill">
          <img src={imagenMostrar}/>
        </div>

        
        <div className='cont-text-descriptivo'>
          <span className='text-tecnologia'>{tecnologia}</span>
        </div>
        <div className='cont-text-descriptivo'>
          <span className='texto-experiencia'>{experiencia}</span>
        </div>



      </div>
    </div>
  )
}

export default CardInfoTecnologia