import BloqueExperienciaCargando from '../bloqueExperiencia/BloqueExperienciaCargando';
import './SkeletonItemsExperience.css';

function SkeletonItemsExperience() {
    const cantidadElementos = 5;
    const items = Array.from({length:cantidadElementos},(_,index)=>index + 1);


  return (
 
       <>
              {items.map((item)=>{
               return ( <BloqueExperienciaCargando key={item} id={item} />)
              })}
        </>
  )
}

export default SkeletonItemsExperience