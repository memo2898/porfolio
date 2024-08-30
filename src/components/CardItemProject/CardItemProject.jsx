/* eslint-disable react/prop-types */


import './CardItemProject.css'

import github_ico from '../../assets/SVG/github.svg'
import linkPr_ico from '../../assets/SVG/linkPr.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


function CardItemProject({imagen, titulo, descripcion, gitLink, previewLink,cardClick, ...props}) {


  const clickCardHandler = (e) => {
    const elementoClikeado = e.target;
    const listaClases =['link_btn','btn_cardProject'];

      // Verificar si el elemento clickeado tiene alguna de las clases en `listaClases`
      const tieneClaseExcluida = listaClases.some(clase => elementoClikeado.classList.contains(clase));


      if (!tieneClaseExcluida) {

   
    // Si cardClick es una función, se ejecuta
    if (typeof cardClick === 'function') {
      cardClick();
    }


  }
  };

  const [displayLinkPreview, setDisplayLinkPreview] = useState(false);
  const [displayGitLink, setDisplayGitLink] = useState(false);

  useEffect(() => {
    previewLink && previewLink.length> 0? setDisplayLinkPreview(true): setDisplayLinkPreview(false)
    gitLink && gitLink.length> 0? setDisplayGitLink(true): setDisplayGitLink(false)
  
  
 
  }, [previewLink,gitLink])
  

 
  
  return (
    <div className="itemCardProject" {...props} onClick={clickCardHandler}>

      <div className="cont-img-cardProject">
        <img src={imagen}  className="img-cardProject" />
      </div>

      <div className="cont-textosCardProjects">
          <h2 className="titulo-cardProject limited-text-3">{titulo}</h2>
          <p className="descripcion-cardProject limited-text-4">{descripcion}</p>

      </div>
      
      
    <div className="cont-botones-cardProject">

      {displayGitLink? <Link to={gitLink} className="link_btn" target="_blank">
        <img src={github_ico}  className="btn_cardProject" />
      </Link>:""}
     

    {displayLinkPreview?
    <Link to={previewLink} className="link_btn" target="_blank">
    <img src={linkPr_ico}  className="btn_cardProject" />
    </Link>:""
    }
     

    </div>
    </div>
  )
}

export default CardItemProject