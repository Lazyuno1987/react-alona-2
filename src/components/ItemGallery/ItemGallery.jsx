
export const ItemGalleryFilm = ({ id, watched, image, title, vote, setCurrentImage, largImage, toggleWatched}) => {
    return (
        <li
            id={id}
            
        >
            <img width={100} src={`https://image.tmdb.org/t/p/w400/${largImage}`} alt="" />
            <h2>{title}</h2>
            <p>Vote:{vote}</p>
            <p onClick={()=>toggleWatched(id)}>Watched:{ watched.toString() }</p>
            <button onClick={()=>setCurrentImage(image)} type='button'>Show poster</button>
            
        </li>
    )
}