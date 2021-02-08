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

        <div className="wrapper">
          <div style={{width:100, height: 100, backgroundColor:'cyan'}}>
            1
          </div>
          <div style={{width:100, height: 100, backgroundColor:'cyan'}}>
            2
          </div>
          <div style={{width:100, height: 100, backgroundColor:'cyan'}}>
            3
          </div>
          <div style={{width:100, height: 100, backgroundColor:'cyan'}}>
            4
          </div>
          <div style={{width:100, height: 100, backgroundColor:'cyan'}}>
            5
          </div>
          <div style={{width:100, height: 100, backgroundColor:'cyan'}}>
            6
          </div>
          <div style={{width:100, height: 100, backgroundColor:'cyan'}}>
            7
          </div>
          <div style={{width:100, height: 100, backgroundColor:'cyan'}}>
            8
          </div>
          <div style={{width:100, height: 100, backgroundColor:'cyan'}}>
            9
          </div>
          <div style={{width:100, height: 100, backgroundColor:'cyan'}}>
            10
          </div>

        </div>
      </div>
      

    </div>
  );
}

export default App;
