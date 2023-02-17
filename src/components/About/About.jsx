import {  Datos, Imagen, ContAbout } from "../../styles/styled-components"
import img from "../../resources/profile.jpg"

export default function About (){
    return(
        <ContAbout>
            <Datos>Author: trechi.</Datos>
            <Imagen src={(img)} alt="Mi foto de perfil"/>
            <Datos>Página web con temática de la serie animada Rick and Morty. Aquí podrás conocer los personajes de la serie.</Datos>
        </ContAbout>
    )
}