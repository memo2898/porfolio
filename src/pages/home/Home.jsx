/* eslint-disable no-unused-vars */
import React from 'react'
import SeccionSliderPrincipal from '../../components/secciones/seccion_slider_principal/SeccionSliderPrincipal'
import Header from '../../components/global/header/Header'
import SeccionSkills from '../../components/secciones/seccion_skills/SeccionSkills'
import SeccionSomeProjects from '../../components/secciones/seccion_projects/SeccionSomeProjects'
import SeccionExperience from '../../components/secciones/seccion_experience/SeccionExperience'


function Home() {
  return (
    <>

        <Header/>
        <SeccionSliderPrincipal/>
        <div className="style-fondo-2">
            <SeccionSkills/>
            <SeccionSomeProjects/>
        </div>
        <SeccionExperience/>

    </>
  )
}

export default Home