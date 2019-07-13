import { ADD_FAV, REMOVE_FAV } from '../actions';

function addToFavorite(state = [], action) {
  let favoriteMovies;

	switch(action.type) {

		case ADD_FAV: 
			console.log("Movie added to favorite", action.movie);
		 favoriteMovies = [...state, action.movie];
      return favoriteMovies;
      
		case REMOVE_FAV:
			favoriteMovies = state.filter(item=> item.id !== action.movie.id);
      return favoriteMovies;
      
		default:
			return state;
	}
}

export default addToFavorite;