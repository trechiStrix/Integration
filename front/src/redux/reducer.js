import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacter: [],
  filteredCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacter: [...state.allCharacter, action.payload],
        filteredCharacters: [...state.filteredCharacters, action.payload],
      };

    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== action.payload),
        allCharacter: state.allCharacter.filter((char) => char.id !== action.payload),
        filteredCharacters: state.filteredCharacters.filter((char) => char.id !== action.payload),
      };

    case FILTER:
      if (action.payload === "all") {
        return {
          ...state,
          filteredCharacters: state.allCharacter,
        };
      } else {
        const filteredChars = state.allCharacter.filter(
          (char) => char.gender === action.payload
        );
        return {
          ...state,
          filteredCharacters: filteredChars,
        };
      }

    case ORDER:
      const sortedFavorites =
        action.payload === "Ascendente"
          ? state.myFavorites.sort((a, b) => a.id - b.id)
          : state.myFavorites.sort((a, b) => b.id - a.id);
      const sortedFilteredChars =
        action.payload === "Ascendente"
          ? state.filteredCharacters.sort((a, b) => a.id - b.id)
          : state.filteredCharacters.sort((a, b) => b.id - a.id);
      return {
        ...state,
        myFavorites: sortedFavorites,
        filteredCharacters: sortedFilteredChars,
      };

    default:
      return state;
  }
};

export default reducer;