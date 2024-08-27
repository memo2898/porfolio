import { useState } from 'react';
import bars from '../../../assets/WEBP/bars.webp';

function BtnMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const handlerMenu = ()=>{
        alert("Manejar")
    }

  return (
    <div className='cont-btnMenu'>
        <img src={bars} className='btnMenu' onClick={handlerMenu}/>
    </div>
  )
}

export default BtnMenu