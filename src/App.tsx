import React from 'react';
import logo from './logo.svg';
import './App.css';
import axiosInstance from './api/axios.instacne';
import { Movie } from './models/types';
import SearchBar from './components/SearchBar';
import { AxiosResponse } from 'axios';
import MovieCard from './components/MovieCard';
import MovieModal from './components/Modal';
import { getMovieByName, getMovieList } from './service/networkService';

const movieIds = [

  "tt4154796",
  "tt3741700",
  "tt0468569",
  "tt0119488",
  "tt0114814",
  "tt0064116",
  "tt1853728",
  "tt7286456",
  "tt0816692",
  "tt0086190"

]
interface Props {

}

interface State {
  isLoading: boolean
  movies: Array<Movie>
  movieToShowInModal: Movie | null
  shouldOpenModal: boolean
}

const initialState: State = {
  isLoading: true,
  movies: [],
  movieToShowInModal: null,
  shouldOpenModal: false
}

const App:React.FC<Props> = () => {

  const [state, setState] = React.useState(initialState)

  React.useEffect(() => {

    async function fetchFilms() {

      await getMovieList()
        .then(res => {
          setState(prevState => ({...prevState, isLoading: false, movies:res}))  
        })
        .catch(err => {
          console.log(err);
          setState(prevState => ({...prevState, isLoading: false}))
        })
    } 

    fetchFilms();
    
  }, [])

  return (
    <div className="App">

      <SearchBar onSubmitCallback={(searchQuerry) => {
        
        async function fetchMovieByName (searchQuerry: string) {
          getMovieByName(searchQuerry)
            .then(res => {
              if(res?.Error){
                setState(prevState => ({...prevState, shouldOpenModal: false, movieToShowInModal:res}))
                alert(`Sorry we could find anything about ${searchQuerry}`)
              }
              else {
                setState(prevState => ({...prevState, shouldOpenModal: true, movieToShowInModal:res}))
              }
            }).catch(err => {
              console.log(`error = ${JSON.stringify(err)}`);
              setState(prevState => ({...prevState, shouldOpenModal: false, movieToShowInModal:null}))
              alert(`Sorry we could find anything about ${searchQuerry}`)
            })
        }

        fetchMovieByName(searchQuerry)
      }}/>

      <div className="body">

        <p className="Title">
          Popular Movies
        </p>

        {
          state.isLoading ? 

            <div >
                Loading Movies 
            </div>
            :
            <div className="wrapper">
              {
                state.movies.length === 0 ?
                  <div>
                    There was a problem loading movies
                  </div> 
                  :
                  state.movies.map( (movie, index) => {
                    return( 
                      <MovieCard
                        movie={movie}
                        onClickCallback={() => {
                          console.log('onClick callbak');
                          
                          setState(prevState => ({...prevState, shouldOpenModal: true, movieToShowInModal: movie}))
                        }}
                      />
                    )
                  })
              }
              <MovieModal
                          movie={state.movieToShowInModal!}
                          shouldOpen={state.shouldOpenModal}
                          onCloseClick={() => setState(prevState => ({...prevState, shouldOpenModal: false}))}
              />
            </div>
        }
      </div>
      

    </div>
  );
}

export default App;
