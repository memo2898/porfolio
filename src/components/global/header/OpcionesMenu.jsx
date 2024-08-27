
import { NavLink } from 'react-router-dom';

function OpcionesMenu() {
  return (
    <>
                {/**Opciones de menu start*/}
                
                    <ul className="opciones_menu">

                        <NavLink to="/" >
                            <li className="opcion_menu">Home</li>
                        </NavLink>
                        <NavLink to="/about" >
                            <li className="opcion_menu" >About me</li>
                        </NavLink>


                        <NavLink to="/portfolio" >
                            <li className="opcion_menu">Portfolio</li>
                        </NavLink>

                        <NavLink to="/contact" >
                            <li className="opcion_menu" >Contact</li>
                        </NavLink>
                        
                    </ul>
     
            {/**Opciones de menu end */}
    </>
  )
}

export default OpcionesMenu