
import logo_ico from '../../../assets/WEBP/logo.webp'

import '../header/Header.css';

import { NavLink } from 'react-router-dom';

function Header() {


  return (
    <section className="header_app">
        <div className="margen_general">
            <div className="cont-elementos-header">
            {/**Logo start */}
                <div className="cont-logo">
                    <img src={logo_ico} alt="Logo Sistema"  className='logo-header' />
                </div>
            {/**Logo end */}

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
            </div>
        </div>
    </section>
  )
}

export default Header