// import { useSelector } from "react-redux";
// import { Carta, Imagen, Data, ContBtn, Datos, ContCartas} from '../../styles/styled-components';
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { orderCards, filterCards } from "../../redux/actions";


// const Favorites = () => {

//     const { filteredCharacters } = useSelector(state => state)

//     const dispatch = useDispatch();

//     const handleOrder = (event) => {
//         dispatch(orderCards(event.target.value))
//     }

//     const handleFilter = (event) => {
//         dispatch(filterCards(event.target.value))
//     }

//     return(

//             <ContCartas>
//                 <div>
//                     <select onChange={handleOrder}>
//                         <option value="order" disabled='disabled'>Order By</option>
//                         <option value="Ascendente">Ascendente</option>
//                         <option value="Descendente">Descendente</option>
//                     </select>

//                     <select onChange={handleFilter}>
//                         <option value="filter" disabled='disabled'>Filter By</option>
//                         <option value="all">All</option>
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                         <option value="Unknown">Unknown</option>
//                         <option value="Genderless">Genderless</option>
//                     </select>
//                 </div>
//             {
//                 filteredCharacters.map((character) =>{
//                     return (
                       
//                         <Carta>
//                              <Data>
//                                 <ContBtn>
//                                 <Link to={`/detail/${character.id}`} style = {{textDecoration: "none"}}>
//                                     <Datos>{character.name}</Datos>
//                                 </Link>
//                                 </ContBtn>
//                             </Data>
                            
//                             <Link to={`/detail/${character.id}`} style = {{textDecoration: "none"}}>
//                                 <Imagen src={character.image} alt={character.name} />

//                                 <Data>
//                                     <Datos>{character.gender}</Datos>
//                                     <Datos>{character.species}</Datos>
//                                 </Data>
//                             </Link>
//                             </Carta>
                            
//                     )
//                 })
                      
//             }
//             </ContCartas>
  
//     )
// }

// export default Favorites;

import { useSelector } from "react-redux";
import { Carta, Imagen, Data, ContBtn, Datos, ContCartas } from "../../styles/styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";

const Favorites = () => {
  const { filteredCharacters } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <ContCartas>
      <div>
        <select onChange={handleOrder}>
          <option value="" disabled>
            Order By
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        <select onChange={handleFilter}>
          <option value="" disabled>
            Filter By
          </option>
          <option value="all">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>
      {filteredCharacters.map((character) => {
        return (
          <Carta key={character.id}>
            <Data>
              <ContBtn>
                <Link to={`/detail/${character.id}`} style={{ textDecoration: "none" }}>
                  <Datos>{character.name}</Datos>
                </Link>
              </ContBtn>
            </Data>

            <Link to={`/detail/${character.id}`} style={{ textDecoration: "none" }}>
              <Imagen src={character.image} alt={character.name} />

              <Data>
                <Datos>{character.gender}</Datos>
                <Datos>{character.species}</Datos>
              </Data>
            </Link>
          </Carta>
        );
      })}
    </ContCartas>
  );
};

export default Favorites;
