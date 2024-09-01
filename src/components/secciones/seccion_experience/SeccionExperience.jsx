
import BloqueExperiencia from '../../bloqueExperiencia/BloqueExperiencia';
import './SeccionExperience.css';

function SeccionExperience() {

    
  return (
    <div className="style-fondo-3">
        <div className="margenes_general ">
          <div className="cont-titulo-principal">
                <h1 className="titulo-principal">Experience</h1>
            </div>


              <div className="cont-bloques-experiencias">
              <BloqueExperiencia 
                year={"2005 - 2017"}
                posicion={"Ingeniero de Software"}
                institucion={"Banco Nacional"}
                pais={"Rep Dominicana"}
                descripcion={`Desarrollé e implementé soluciones bancarias personalizadas que mejoraron la eficiencia de las operaciones diarias. Participé en todas las fases del ciclo de vida del desarrollo de software, desde la recopilación de requisitos hasta la implementación final. Colaboré con un equipo multifuncional para optimizar la arquitectura de software y garantizar la calidad del código.`}
              />

<BloqueExperiencia 
  year={"2010 - Now"}
  posicion={"Analista de Sistemas"}
  institucion={"Ministerio de Educación"}
  pais={"Rep Dominicana"}
  descripcion={`Responsable del análisis y diseño de sistemas de información para mejorar los procesos educativos. Realicé estudios de viabilidad, diseñé diagramas de flujo de datos y colaboré en la creación de planes de implementación. Trabajé estrechamente con los usuarios finales para garantizar que las soluciones desarrolladas cumplían con sus necesidades y expectativas.`}
/>

<BloqueExperiencia 
  year={"2015 - Ahora"}
  posicion={"Líder de Proyecto"}
  institucion={"Empresa de Tecnología Global"}
  pais={"Rep Dominicana"}
  descripcion={`Encabezé proyectos de desarrollo de software a gran escala, coordinando equipos de desarrollo, asegurando la entrega dentro de los plazos y presupuestos establecidos. Implementé metodologías ágiles para mejorar la colaboración y la eficiencia del equipo. Supervisé la calidad del producto final y gestioné la comunicación con los stakeholders.`}
/>

<BloqueExperiencia 
  year={2018}
  posicion={"Consultor Técnico"}
  institucion={"Consultora Internacional"}
  pais={"Rep Dominicana"}
  descripcion={`Brindé asesoría técnica a empresas en la implementación de soluciones de software avanzadas. Evalué las necesidades tecnológicas de los clientes y diseñé soluciones personalizadas para optimizar su infraestructura tecnológica. Además, impartí formación a equipos internos sobre nuevas herramientas y metodologías de desarrollo.`}
/>

<BloqueExperiencia 
  year={2022}
  posicion={"Arquitecto de Soluciones"}
  institucion={"Empresa de Innovación Digital"}
  pais={"Rep Dominicana"}
  descripcion={`Diseñé arquitecturas de software complejas que soportan las necesidades estratégicas de la empresa. Colaboré con equipos de desarrollo para implementar soluciones escalables y seguras. Lideré la investigación y adopción de nuevas tecnologías para asegurar que las soluciones desarrolladas estuvieran a la vanguardia de la innovación.`}
/>

               
              </div>
        </div>

    </div>
  )
}

export default SeccionExperience