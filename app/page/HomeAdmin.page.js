import React,{ useState } from 'react'
import '../styles/homeAdmin.style.css'
import Container from '../components/Container.component'
import ContainerMain from '../components/ContainerMain.component'
import DatosEntidad from '../components/DatosEntidad.component'
import SideMenu from '../components/SideMenu.component'
import Config from '../components/config.component'
import Estudiantes from '../components/estudiantes.component'

function HomeAdmin(){
    return(
        <Container>
            <SideMenu/>
            
            <main>
                <header>
                    <h1>TABLERO</h1>
                    <Config/>
                </header>

                <ContainerMain>
                    <DatosEntidad nombre="Estudiantes" cantidad="932"/>
                    <DatosEntidad nombre="Profesores" cantidad="120"/>
                    <DatosEntidad nombre="Cursos" cantidad="45"/>
                </ContainerMain>

                <section>
                    <h2>Estudiantes Recientes</h2>
                    <Estudiantes/>
                    
                </section>


            </main>
                
        </Container>
      
    )
}

export default HomeAdmin