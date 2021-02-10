import { AxiosResponse } from "axios";
import axiosInstance from "../api/axios.instacne";
import { Movie } from "../models/types";

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

export const getMovieList = () => new Promise<Movie[]>((resolve, reject) => {

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
            
            console.log(movies);
            
            resolve(movies)
        })
        .catch( err => reject({error: 'Failed to fetch movies', msg: JSON.stringify(err)}))
})

export const getMovieByName = (name: string) => new Promise<Movie>((resolve, reject) => {

    axiosInstance.post<Movie>('/', null, {params: {t: name}})
        .then(res => resolve(res.data))
        .catch(err => reject({error: `Failed to fetch ${name}`, message: err}))

})