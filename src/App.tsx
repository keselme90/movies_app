import React from 'react';
import logo from './logo.svg';
import './App.css';
import axiosInstance from './api/axios.instacne';
import { Movie } from './models/types';
import SearchBar from './components/SearchBar';
import { AxiosResponse } from 'axios';
import MovieCard from './components/MovieCard';
import MovieModal from './components/Modal';

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
  clickedMovieIndex: number
  shouldOpenModal: boolean
}

const initialState: State = {
  isLoading: true,
  movies: [],
  clickedMovieIndex: -1,
  shouldOpenModal: false
}

const App:React.FC<Props> = () => {

  const [state, setState] = React.useState(initialState)

  React.useEffect(() => {

    const promises:Promise<AxiosResponse<Movie>>[] =  []

    movieIds.forEach((movie) => {
        console.log(movie);
        
        promises.push(axiosInstance.post<Movie>('/', null, {params: {i: movie}}))
    })

    Promise.all(promises)
        .then(res => {
            const movies: Array<Movie> = []

            res.forEach(elem => {
              movies.push(elem.data)
            })
            setState({isLoading: false, movies:movies})
        })
        .catch( err => console.log(JSON.stringify(err)))
  }, [])

  return (
    <div className="App">

      <SearchBar onSubmitCallback={(searchQuerry) => {
        axiosInstance.post<Movie>('/', null, {params: {t: searchQuerry}})
          .then(res => {
            const {data} = res
          })
          .catch(err => {
            console.log(JSON.stringify(err));
            
          })
      }}/>

      <div className="body">

        <p className="Title">
          Popular Movies
        </p>

        {
          state.isLoading ? 

          // TODO: create component or at least something better for loading stage
            <div >
                Loading Movies 
            </div>
            :
            <div className="wrapper">
              {
                state.movies.map( (movie, index) => {
                  return( 
                    <MovieCard
                      movie={movie}
                      onClickCallback={() => {
                        console.log('onClick callbak');
                        
                        setState(prevState => ({...prevState, shouldOpenModal: true, clickedMovieIndex: index}))
                      }}
                    />
                  )
                })
              }
              <MovieModal
                          movie={state.movies[state.clickedMovieIndex]}
                          shouldOpen={state.shouldOpenModal}
              />
            </div>
        }
      </div>
      

    </div>
  );
}

export default App;
