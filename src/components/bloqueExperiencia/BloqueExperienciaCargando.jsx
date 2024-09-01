/* eslint-disable react/prop-types */
import './BloqueExperiencia.css'



function BloqueExperienciaCargando() {
  

    
  return (
    <div className='bloqueExperiencia'>
        
        {/** //? Columna Principal 1 start*/}
        <div className="columna-principal1-BE">
            <div className="arriba_BE">

                <div className="cont-item-year-mobile-arriba">
                    <div className="cont-item-year-mobile">
                        <span className='item-year'></span>
                    </div>
                </div>

            </div>
            <div className="abajo_BE">            
                <div className="cont-item-year ">
                    <span className='item-year'></span>
                </div>

                <div className="cont-burbuja_liena">
                    <div className="cont-burbuja ">
                        <div className="burbuja loadingSkeleton"></div>
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
                <div className="titulo-principal2-B2-skeleton loadingSkeleton"></div>
            </div>

            <div className="cont-texto-inst-pais-B2">
                <p className="texto-inst-pais-B2"></p>
                <div className="texto-inst-pais-B2-skeleton loadingSkeleton"></div>
            </div>
            
            <div className='cont-texto-descripcion-B2'>
               
                <div className="texto-descripcion-B2-skeleton loadingSkeleton"></div>
            </div>
            <div className='cont-btn-mas'>
              <div className="forma-bton loadingSkeleton"></div>
            </div>
            
        </div>
        {/** //? Columna Principal 2 end*/}

    </div>
  )
}

export default BloqueExperienciaCargando