import React from 'react'
import { Movie } from '../models/types';
import '../styles/movie_card.css'

interface Props {
    movie: Movie
    onClickCallback: () => void
}

const MovieCard: React.FC<Props> = ({movie, onClickCallback}) => {

    return (
        <div className="card">
            
                <img src={movie.Poster} 
                     className="moviePoster" 
                     alt={movie.Title} 
                     onClick={() => onClickCallback()}
                />
        </div>
    )
}


export default MovieCard
