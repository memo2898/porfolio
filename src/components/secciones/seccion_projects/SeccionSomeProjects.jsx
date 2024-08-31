import CardItemProject from "../../CardItemProject/CardItemProject"
import fotoEjemplo from "../../../assets/WEBP/img-p-e1.webp"
import './SeccionSomeProjects.css'
import SkeletonCardsProjects from "../../SkeletonCardsProjects/SkeletonCardsProjects"
import { useState } from "react"
import { useEffect } from "react"



function SeccionSomeProjects() { 
const[initial, setInitial] = useState(false);

useEffect(()=>{
  setTimeout(() => {
    setInitial(true);
  },2000)
},[])

  const clickCard = ()=>{
    alert("Click en el proyecto")
  }
  return (
    <section className="seccionSomeProjects">
        <div className="margenes_general ">

            <div className="cont-titulo-principal">
                    <h1 className="titulo-principal">Some Projects</h1>
            </div>



            <div className="cont-cards-projects">

              {!initial?
              <SkeletonCardsProjects/>:
              <>
                    {/**Item start */}
                        <CardItemProject
                        imagen={fotoEjemplo}
                        titulo={"Sistema de gestión de intercambios asdasdasdasdasd asdasdasdasdasdas  asdasdasdasdasdasdas"}
                        descripcion={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iure suscipit quos. Similique explicabo neque laborum repudiandae! Officiis, quam. In a iusto dolorem fuga iste labore non enim, eum praesentium"}
                        gitLink={"i"}
                        previewLink={"i"}
                        cardClick={clickCard}
                        />
                    {/**Item end */}
                    {/**Item start */}
                        <CardItemProject
                        imagen={fotoEjemplo}
                        titulo={"Sistema de gestión de intercambios asdasdasdasdasd asdasdasdasdasdas  asdasdasdasdasdasdas"}
                        descripcion={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iure suscipit quos. Similique explicabo neque laborum repudiandae! Officiis, quam. In a iusto dolorem fuga iste labore non enim, eum praesentium"}
                        gitLink={"i"}
                        previewLink={"i"}
                        cardClick={clickCard}
                        />
                    {/**Item end */}
                    {/**Item start */}
                        <CardItemProject
                        imagen={fotoEjemplo}
                        titulo={"Sistema de gestión de intercambios asdasdasdasdasd asdasdasdasdasdas  asdasdasdasdasdasdas"}
                        descripcion={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iure suscipit quos. Similique explicabo neque laborum repudiandae! Officiis, quam. In a iusto dolorem fuga iste labore non enim, eum praesentium"}
                        gitLink={"i"}
                        previewLink={"i"}
                        cardClick={clickCard}
                        />
                    {/**Item end */}
                    {/**Item start */}
                        <CardItemProject
                        imagen={fotoEjemplo}
                        titulo={"Sistema de gestión de intercambios asdasdasdasdasd asdasdasdasdasdas  asdasdasdasdasdasdas"}
                        descripcion={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iure suscipit quos. Similique explicabo neque laborum repudiandae! Officiis, quam. In a iusto dolorem fuga iste labore non enim, eum praesentium"}
                        gitLink={"i"}
                        previewLink={"i"}
                        cardClick={clickCard}
                        />
                    {/**Item end */}
                    {/**Item start */}
                        <CardItemProject
                        imagen={fotoEjemplo}
                        titulo={"Sistema de gestión de intercambios asdasdasdasdasd asdasdasdasdasdas  asdasdasdasdasdasdas"}
                        descripcion={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iure suscipit quos. Similique explicabo neque laborum repudiandae! Officiis, quam. In a iusto dolorem fuga iste labore non enim, eum praesentium"}
                        gitLink={"i"}
                        previewLink={"i"}
                        cardClick={clickCard}
                        />
                    {/**Item end */}
                    {/**Item start */}
                        <CardItemProject
                        imagen={fotoEjemplo}
                        titulo={"Sistema de gestión de intercambios asdasdasdasdasd asdasdasdasdasdas  asdasdasdasdasdasdas"}
                        descripcion={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iure suscipit quos. Similique explicabo neque laborum repudiandae! Officiis, quam. In a iusto dolorem fuga iste labore non enim, eum praesentium"}
                        gitLink={"i"}
                        previewLink={"i"}
                        cardClick={clickCard}
                        />
                    {/**Item end */}
                    {/**Item start */}
                        <CardItemProject
                        imagen={fotoEjemplo}
                        titulo={"Sistema de gestión de intercambios asdasdasdasdasd asdasdasdasdasdas  asdasdasdasdasdasdas"}
                        descripcion={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iure suscipit quos. Similique explicabo neque laborum repudiandae! Officiis, quam. In a iusto dolorem fuga iste labore non enim, eum praesentium"}
                        gitLink={"i"}
                        previewLink={"i"}
                        cardClick={clickCard}
                        />
                    {/**Item end */}
              </>
            
            }
              
              
            
             
             
             
            
             
           
            </div>

        </div>
    </section>
  )
}

export default SeccionSomeProjects