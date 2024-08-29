
import CardInfoTecnologia from "../../CardInfoTecnologia/CardInfoTecnologia"
import SkeletonCardsSkills from "./SkeletonCardsSkills"


function SeccionSkills() {
  return (
    <section className="seccionSkills">
        <div className="margenes_general ">

            <div className="cont-titulo-principal">
                <h1 className="titulo-principal">Skills</h1>
            </div>
           {/**Cards tecnologias start */}
                <div className="cont-cards_tecnologias">
                        
                        <SkeletonCardsSkills/>

                        
                        <CardInfoTecnologia/>
                </div>
           {/**Cards tecnologias end */}
        </div>
    </section>
  )
}

export default SeccionSkills