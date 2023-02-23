import { useState } from "react";
import {Barra, Btn} from '../../styles/styled-components';
import { Link } from "react-router-dom";

export default function SearchBar(props) {

   const [text, setText] = useState("")

   function handleChange(event){
      setText(event.target.value);
   }

   function handleReset() {
      setText("");
   }

   return (
      <div>
         <Barra type='search' value = {text} onChange={handleChange}/>
         <Link to="/home">
        <Btn onClick={() => {
          props.onSearch(text);
          handleReset();
        }}>Agregar</Btn>
      </Link>
      </div>
   );
}

