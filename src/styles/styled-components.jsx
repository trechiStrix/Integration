import styled from 'styled-components'
import img from '../resources/fondo.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-image: url(${img});
    background-size: cover;
`;

const ContCartas = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
`
const Carta = styled.div`
    border: 3px solid yellow;
    border-radius: 2%; 
    &:hover{
        box-shadow: 0 0 80px #FFFFFF;
        background-color: green;
    }
`
const Imagen = styled.img`
    border-radius: 4%;
    border: 1px solid white;
    border-bottom: none;
`

const CloseBtn = styled.button`
    position: absolute;
    left: 1;
    right: 0;
    margin: auto;
    border-color: white;
    color: white;
    background-color: red;
    border-radius: 50%;
    &:hover{
        border-color: red;
        background-color: white;
        color: red;
    }
`;

const FavBtn = styled.button`
    position: absolute;
    left: 0;
    right: 1;
    margin: auto;
    background-color: red;
    border-radius: 15px;;
`;

const Data = styled.div`

    position: relative;
    color: rgb(158, 230, 210);
    border-radius: 6%;
    border: 1px solid white;
    border-top: none;
    `
const Datos = styled.h2`
    background-color: rgb(255, 255, 255, 0.8); 
    color: rgb(14, 82, 64);
    box-shadow: 0px 0px 25px rgba(255, 255, 0, 0.99);
    border-radius: 4px;
`
const ContBtn = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    justify-content: flex-end;    
    background-color: rgb(6, 52, 40);
    color: rgb(158, 230, 210);
    border-radius: 6%;
    border: 1px solid white;
`

const Barra = styled.input`
padding: 18px;
background-color: black;    
color: rgb(228, 208, 27);
box-shadow: 0px 0px 25px rgba(255, 255, 0, 0.5);
border-radius: 4px;
border: 1px solid;
border-color: rgb(228, 208, 27);
`

const Btn = styled.button`  
    padding: 18px;
    background-color: black;    
    color: rgb(228, 208, 27);
    box-shadow: 0px 0px 25px rgba(255, 255, 0, 0.5);
    border-radius: 4px;
    border: 1px solid;
    border-color: rgb(228, 208, 27);
    &:hover{
        border-color: rgb(228, 208, 27);
        background-color: rgb(228, 208, 27);
        color: black;
    }
`
const ContAbout = styled.div`
    display: inline-block;
    width: 100vh;
`
const Navigate = styled.div`
    position: relative;
    left: 0;
    right: 0;
    margin: auto;
    width: 100vh;
    color: rgb(14, 82, 64);
    padding: 25px;
    justify-content: space-around;
    display: flex;
    
    border-radius: 7px;
`
const Linked = styled.span`
    position: absolute;
    padding: 15px;
    background-color: black;    
    color: rgb(228, 208, 27);
    box-shadow: 0px 0px 25px rgba(255, 255, 0, 0.5);
    border-radius: 4px;
    border: 1px solid;
    border-color: rgb(228, 208, 27);
    &:hover{
        border-color: rgb(228, 208, 27);
        background-color: rgb(228, 208, 27);
        color: black;
    }
`

const Detalles = styled.div`
margin-top: 50px;
background-color: black;
color: rgb(158, 230, 210);
padding-left 15%;
padding-right: 15%;
border-radius: 6%;
border: 1px solid yellow;
`

const DatosDetail = styled.h2`
    padding: 2px;
    background-color: rgb(255, 255, 255, 0.8); 
    color: rgb(14, 82, 64);
    box-shadow: 0px 0px 25px rgba(255, 255, 0, 0.5);
    border-radius: 4px;
    min-width: 400px;
`

const ImagenDetalle = styled.img`
    border-radius: 4%;
    border: 1px solid yellow;
    margin-top: 25px;
`
const Login = styled.form`
    background-color: rgba(245, 245, 7, 0.6);
    position: absolute;
    width: 550px;
    height: 250px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    border-radius: 20%;
    padding: 20px;
`
const Label = styled.label`
    position: relative;
    background-color: black;
    color: yellow;
    padding: 5px;
    border-radius: 6px;
`

const Error = styled.p`
    position: relative;
    background-color: black;
    color: red;
    padding: 5px;
    border-radius: 6px;
`

const LogBtn = styled.button`
    background-color: black;
    color: yellow;
    border-radius: 4px;
    padding: 5px;
    &:hover{
        border-color: black;
        background-color: yellow;
        color: black;
    }
`

export {
    CloseBtn,
    Container,
    ContCartas,
    Carta,
    Imagen,
    Data,
    ContBtn,
    Datos,
    Barra,
    Btn,
    Navigate,
    Linked,
    ContAbout,
    Detalles,
    DatosDetail,
    ImagenDetalle,
    Login,
    Label,
    Error,
    LogBtn,
    FavBtn
}

