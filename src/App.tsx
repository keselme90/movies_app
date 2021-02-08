import React from 'react';
import logo from './logo.svg';
import './App.css';
import axiosInstance from './api/axios.instacne';
import { Movie } from './models/types';
import SearchBar from './components/SearchBar';

interface Props {

}

const App:React.FC<Props> = () => {

  React.useEffect(() => {
    axiosInstance.post<Movie>('/', null, {params: {t: 'Iron Man',}})
      .then(res => {
        const { data } = res
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      })
  }, [])

  return (
    <div className="App">

      <SearchBar onSubmitCallback={(searchQuerry) => {

      }}/>

      <div className="body">

        <p className="Title">
          Popular Movies
        </p>

      </div>
      

    </div>
  );
}

export default App;
