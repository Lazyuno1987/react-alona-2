import {ItemGalleryFilm} from '../ItemGallery/ItemGallery'


export const FilmGallery = ({ array, setCurrentImage, toggleWatched }) => {
 return(   <ul>
     {array.map(({id, largImage, image, title, vote, watched}) => (
         <ItemGalleryFilm
             key={id}
             id={id}
             image={image}
             title={title}
             vote={vote}
             largImage={largImage}
             watched={watched}
             setCurrentImage={setCurrentImage}
             toggleWatched={toggleWatched}
         />
     ))}
  </ul>
 )
}
