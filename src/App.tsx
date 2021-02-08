import React from 'react';
import logo from './logo.svg';
import './App.css';
import axiosInstance from './api/axios.instacne';
import { Movie } from './models/types';

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
      
    </div>
  );
}

export default App;
