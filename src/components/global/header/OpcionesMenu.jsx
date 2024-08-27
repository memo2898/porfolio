
import { NavLink } from 'react-router-dom';

function OpcionesMenu() {
  return (
    <>
                {/**Opciones de menu start*/}
                <div className="cont-opciones_menu">
                    <ul className="opciones_menu">

                        <NavLink to="/" className="opcion_menu">
                            <li >Home</li>
                        </NavLink>
                        <NavLink to="/about" className="opcion_menu">
                            <li >About me</li>
                        </NavLink>


                        <NavLink to="/portfolio" className="opcion_menu">
                            <li>Portfolio</li>
                        </NavLink>

                        <NavLink to="/contact" className="opcion_menu">
                            <li>Contact</li>
                        </NavLink>
                        
                    </ul>
            </div>
            {/**Opciones de menu end */}
    </>
  )
}

export default OpcionesMenu