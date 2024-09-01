/* eslint-disable react/prop-types */
import './BloqueExperiencia.css'



function BloqueExperiencia({year, posicion,institucion,pais,descripcion}) {
  

    
  return (
    <div className='bloqueExperiencia'>
        
        {/** //? Columna Principal 1 start*/}
        <div className="columna-principal1-BE">
            <div className="arriba_BE">

                <div className="cont-item-year-mobile-arriba">
                    <div className="cont-item-year-mobile">
                        <span className='item-year'>{year}</span>
                    </div>
                </div>

            </div>
            <div className="abajo_BE">            
                <div className="cont-item-year">
                    <span className='item-year'>{year}</span>
                </div>

                <div className="cont-burbuja_liena">
                    <div className="cont-burbuja">
                        <div className="burbuja"></div>
                    </div>
                    {/* <div className="cont-linea-BE">
                        <div className="linea-BE"></div>
                    </div> */}
                </div>

            </div>

            <div className="cont-linea-BE">
                <div className="linea-BE"></div>
            </div>
            

        </div>
        {/** //? Columna Principal 1 end*/}

        {/** //? Columna Principal 2 start*/}
        <div className="columna-principal2-BE">
            <div className="cont-titulo-principal2-B2">
                <h2 className="titulo-principal2-B2">{posicion}</h2>
            </div>

            <div className="cont-texto-inst-pais-B2">
                <p className="texto-inst-pais-B2">{institucion}, {pais}</p>
            </div>
            
            <div className='cont-texto-descripcion-B2'>
                <p className='texto-descripcion-B2'>{descripcion}</p>
            </div>
        </div>
        {/** //? Columna Principal 2 end*/}

    </div>
  )
}

export default BloqueExperiencia