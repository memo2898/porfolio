
import CardInfoTecnologia from "../../CardInfoTecnologia/CardInfoTecnologia"
import SkeletonCardsSkills from "./SkeletonCardsSkills"
import techEjemplo from "../../../assets/SVG/ejemploTech.svg"
import techEjemplo2 from "../../../assets/SVG/ejemploTech2.svg"
import { useEffect, useState } from "react"
import BtnStandard from "../../btnStandard/BtnStandard"

function SeccionSkills() {
    const [initial, setInitial] = useState(false);
    const [infoSkills, setInfoSkills] = useState([]);

    useEffect(()=>{


        //False request :
        setTimeout(()=>{


            const dataRespuesta = []
            const cantidadDatos = 11
            for (let i = 0; i < cantidadDatos; i++) {
                dataRespuesta.push(     {
                    id: i+1,
                    imagen:techEjemplo,
                    imagenHover:techEjemplo2,
                    color:"#E35027",
                    tecnologia:"HTML",
                    experiencia:"+ 2 años"
                })
               
                
            }
            
            setInfoSkills(dataRespuesta)

            
            setInitial(true)
        },2000)


    },[])
  return (
    <section className="seccionSkills">
        <div className="margenes_general ">

            <div className="cont-titulo-principal">
                <h1 className="titulo-principal">Skills</h1>
            </div>
           {/**Cards tecnologias start */}
                <div className="cont-cards_tecnologias">
                <div className="cont-cardsSkills">


                    {!initial? 
                        <SkeletonCardsSkills/> 
                    :
                    
                    infoSkills.map(skill =>{
                        return(
                          
                            <CardInfoTecnologia 
                            key={skill.id}
                            imagen={skill.imagen}
                            imagenHover={skill.imagenHover}
                            color={skill.color}
                            tecnologia={skill.tecnologia}
                            experiencia={skill.experiencia}
                            onClick={()=>{alert("Click en la card Tecno ... abre un modal donde se de una descripcion de la tecnolgia y se muestre los proyectos donde he usado esta tecnologia")}}
                            />)
                    })
              
                    
                    
                    }
                </div>


               


            {initial && infoSkills.length>10?   
            <div className="cont-btn-ver-mas">    
                <BtnStandard 
                titulo="Ver más"
                onClick={()=>{alert("Cuando se le de click al boton se debe manejar el ver mas y ver menos tecnologias")}}

                />
            </div> 
            :""}
                    



                </div>
           {/**Cards tecnologias end */}
        </div>
    </section>
  )
}

export default SeccionSkills