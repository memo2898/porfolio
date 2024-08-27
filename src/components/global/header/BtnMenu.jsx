import { useState } from 'react';
import bars from '../../../assets/WEBP/bars.webp';
import close from '../../../assets/WEBP/close.webp';
import OpcionesMenu from './OpcionesMenu';

function BtnMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const handlerMenu = ()=>{
      setIsOpen(!isOpen)
    }

  return (
    <>
    <div className='cont-btnMenu'>
        <img src={bars} className='btnMenu' onClick={handlerMenu}/>
    </div>

    {/**Aqui la ventana cuando click menu start */}
        <section className={`area-menu-responsive ${isOpen?"":"ocultar-menu"}` }>
            <div className="cont-btn-cerrar">
              <div className="margen_general">
                  <img src={close} className='btnMenu' onClick={handlerMenu}/>
              </div>
            </div>

            <div className="cont-opciones-menu-mobile">
                <OpcionesMenu/>
             </div>
             
        </section>
    {/**Aqui la ventana cuando click menu end */}

    </>
  )
}

export default BtnMenu