import {CloseBtn, Carta, Imagen, Data, ContBtn, Datos, FavBtn} from '../../styles/styled-components'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFavorite, deleteFavorite } from "../../redux/actions"


export default function Card({name, species, gender, image, onClose, id}) {
   
   const dispatch = useDispatch();

   const myFavorites = useSelector(state => state.myFavorites);

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>
   {
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id));
      } else {
         setIsFav(true);
         dispatch(addFavorite({name, species, gender, image, onClose, id}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <Carta>
         
         <Data>
            <ContBtn>
            {
            isFav ? (
               <FavBtn onClick={handleFavorite}>❤️</FavBtn>
            ) : (
               <FavBtn onClick={handleFavorite}>🤍</FavBtn>
            )
         }
            <CloseBtn onClick={onClose}>X</CloseBtn>
               <Link to={`/detail/${id}`} style = {{textDecoration: "none"}}>
                  <Datos>{name}</Datos>
               </Link>
            </ContBtn>

         </Data>
         
         <Link to={`/detail/${id}`} style = {{textDecoration: "none"}}>
            <Imagen src={image} alt={name} />

            <Data>
               <Datos>{gender}</Datos>
               
               <Datos>{species}</Datos>
            </Data>
         </Link>
      </Carta>
     
   );
}
