import Card from './Card';
import {ContCartas} from '../../styles/styled-components'
// import { useParams } from 'react-router-dom';

export default function Cards(props) {
   const { characters, onClose } = props;

   return (
   <div>
      <ContCartas>
      {characters.length>0?characters.map((personaje) => (
      <Card
         name={personaje.name}
         species={personaje.species}
         gender={personaje.gender}
         image={personaje.image}
         onClose={()=>onClose(personaje.id)}
         origin={personaje.origin}
         key={personaje.id}
         id={personaje.id}
      />)):(<h3 style={{color: "white"}}>No hay personajes.</h3>)}
   </ContCartas>
   </div>);
   
}
