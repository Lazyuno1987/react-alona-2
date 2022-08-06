import axios from "axios";

const KEY = '125725f49ad2ae69609a1a5a9c4211d9';

const URL = 'https://api.themoviedb.org/3/';

export const getFilms = ( page ) => {
     return  axios.get(
      `${URL}trending/movie/day?api_key=${KEY}&page=${page}`
    )
    

}
