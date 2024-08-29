import CardInfoTecnCargando from "../../CardInfoTecnologia/CardInfoTecnCargando"
import './SeccionSkills.css'
function SkeletonCardsSkills() {

    const cantidadCards = 10;
    const items = Array.from({length:cantidadCards},(_,index)=>index + 1);

  return (
    
    
       <>
              {items.map((item)=>{
               return ( <CardInfoTecnCargando key={item} id={item} />)
              })}
        </>

  )
}

export default SkeletonCardsSkills