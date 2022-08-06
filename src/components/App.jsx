import React from "react"
import { Button } from "./Button/Button";
import { getFilms } from '../Servises/api'
import { mapperFilms } from '../Helpers/mapper'
import {Modal} from '../components/Modal/Modal'
import {FilmGallery} from '../components/Gallery/Gallery'

class App extends React.Component {
  state = {
    isShow: false,
    films: [],
    page: 1,
    image: '',
    showModal: false
  }

  showFilms = () => {
    this.setState({ isShow: true })
    // this.fetchFilms()
  }

  fetchFilms = () => {
    getFilms(this.state.page).then(res => (
      this.setState((prevState) => (
        { films: [...prevState.films, ...mapperFilms(res.data.results)] }
        
      ))
    ))
  }
  setCurrentImage = (url) => {
  this.setState({image:url})
  }
  
 

  componentDidUpdate(prevProps, prevState) {
  if (prevState.isShow !== this.state.isShow
  || prevState.page!== this.state.page) {
      this.fetchFilms()
    }
  }
  closeModal = () => {
  this.setState({image:''})
}

 toggleWatched = movieId => {
    this.setState({
      films: [
        ...this.state.films.map(({ id, title, image, vote, watched }) =>
          id === movieId
            ? { id, title, image, vote, watched: !watched }
            : { id, title, image, vote, watched }
        ),
      ],
    });
  };
  
  counterIncrement = () =>
    this.setState((prevState) => ({ page: prevState.page + 1}))
  
  render() {
    const {isShow, films, image}= this.state
    return (
     

      <div>
        {!isShow && <Button
          handlerClick={this.showFilms}
          textContent='Show movies'
        />}
        {films.length > 0 && <FilmGallery
          array={films}
          setCurrentImage={this.setCurrentImage}
          toggleWatched={this.toggleWatched}
        />}
        {isShow && <Button textContent='Loade more'
        handlerClick={this.counterIncrement}/>}
        {image && <Modal image={image}
        onClose={this.closeModal}
        />}
      </div>
     
    );
  }
}


export default App;


