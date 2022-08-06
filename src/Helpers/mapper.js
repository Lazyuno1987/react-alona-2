
export const mapperFilms = (array) => {
 return   array.map(({ id, poster_path: largImage, backdrop_path:image , title, vote_average: vote, wathced }) =>( {
        id, image, title, vote, watched:false, largImage
        
    }))

}
