import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { Detalles, DatosDetail, ImagenDetalle, Btn } from "../../styles/styled-components";

export default function Detail(props){

    const [character, setCharacter] = useState({});
    const {detailId} = useParams();
    const navigate = useNavigate();

    function backToHome(){
        navigate("/home");
    }

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return(
        <div>
            <div style={{display: "flex"}}><Btn style={{minHeight: "50px", marginTop: "15px" }} onClick={backToHome}>Volver</Btn></div>
            {
                    character.id ? (
                    <div >
                    <Detalles>
                        <DatosDetail>Name: {character.name}</DatosDetail>
                        <DatosDetail>Status: {character.status}</DatosDetail>
                        <DatosDetail>Specie: {character.species}</DatosDetail>
                        <DatosDetail>Gender: {character.gender}</DatosDetail>
                        <DatosDetail>Origen: {character.origin?.name}</DatosDetail>
                    
                    <ImagenDetalle src={character.image} alt={character.name} ></ImagenDetalle>
                    </Detalles>
                </div>) : <DatosDetail>Loading...</DatosDetail>
            }
        </div>
    )
}