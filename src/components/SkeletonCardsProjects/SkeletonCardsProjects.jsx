import CardProjectCargando from './CardProjectCargando';
import './SkeletonCardsProjects.css';

function SkeletonCardsProjects() {

    const cantidadCards = 5;
    const items = Array.from({length:cantidadCards},(_,index)=>index + 1);


  return (
 
       <>
              {items.map((item)=>{
               return ( <CardProjectCargando key={item} id={item} />)
              })}
        </>
  )
}

export default SkeletonCardsProjects