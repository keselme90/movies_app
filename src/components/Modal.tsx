import React from 'react'
import { Movie } from '../models/types';
import Modal from 'react-modal'

interface Props {
    movie: Movie
    shouldOpen: boolean
}

const MovieModal : React.FC<Props> = ({movie, shouldOpen}) => {

    React.useEffect(() => { 
        console.log("empty array useEffect " + JSON.stringify(movie));
    }, [])

    return (
        movie !== undefined ? 
         <Modal isOpen={shouldOpen} >
             <div style={{
                    display:'flex', 
                    flex:1, 
                    height:'100%',
                    backgroundImage: `url(${movie.Poster})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'auto'
                    
                }}
            >
                <p>
                    {movie.Title}
                </p>
             </div>
        </Modal>
        : <div></div>
    )
}

export default MovieModal;