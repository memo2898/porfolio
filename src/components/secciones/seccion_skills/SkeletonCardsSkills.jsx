import CardInfoTecnCargando from "../../CardInfoTecnologia/CardInfoTecnCargando"
import './SeccionSkills.css'
function SkeletonCardsSkills() {

    const cantidadCards = 15;
    const items = Array.from({length:cantidadCards},(_,index)=>index + 1);

  return (
    
    
        <div className="cont-cardsLoader">
              {items.map((item)=>{
               return ( <CardInfoTecnCargando key={item} id={item} />)
              })}
        </div>

  )
}

export default SkeletonCardsSkills