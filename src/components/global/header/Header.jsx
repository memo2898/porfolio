
import logo_ico from '../../../assets/WEBP/logo.webp'
import '../header/Header.css';
import BtnMenu from './BtnMenu';
import OpcionesMenu from './OpcionesMenu';



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
            <div className="cont-opciones_menu">
            <OpcionesMenu/>
            </div>
            <BtnMenu/>

            </div>
        </div>
    </section>
  )
}

export default Header