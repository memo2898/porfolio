/* eslint-disable react/no-unescaped-entities */

import './SeccionSliderPrincipal.css'
import p1 from '../../../assets/WEBP/p1.webp'
import BtnStandard from '../../btnStandard/BtnStandard'

function SeccionSliderPrincipal() {
  return (
    <section className="section_principal style-fondo-1">
      {/**Lado izquierdo start */}
        <div className="lado_izquierdo_sp margen_izq">

          <div className="cont_mi_nombre">
            <span className="mayus_normal">i' m</span>
            <span className="mi_nombre">Manuel Maldonado</span>
          </div>

          <div className="presentacion_personal">
            <p className='texto-presentacion'>Desarrollador Web con experiencia en crear aplicaciones y sitios web responsive utilizando tecnologías modernas como React, HTML, CSS, y JavaScript. Enfocado en la experiencia de usuario y la optimización del rendimiento, ofrezco soluciones digitales innovadoras que cumplen con los requerimientos técnicos y brindan una experiencia intuitiva.</p>
          </div>


          <div className="cont-botones-sp">
            
            <BtnStandard 
              titulo="Download CV"
              onClick={()=>{alert("Click me")}}
              
              />

          </div>

        </div>
      {/**Lado izquierdo end */}

      {/**Lado derecho start start*/}
        <div className="lado_derecho_sp">
          <div className="cont-mi-imagen">
            <img src={p1} alt="Mi foto" className='mi-imagen'/>
          </div>
        </div>
    </section>
  )
}

export default SeccionSliderPrincipal