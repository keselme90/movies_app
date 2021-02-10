import React from 'react'
import { Movie } from '../models/types';
import Modal from 'react-modal'
import '../styles/modal.css'

interface Props {
    movie: Movie
    shouldOpen: boolean
    onCloseClick: () => void
}

const MovieModal : React.FC<Props> = ({movie, shouldOpen, onCloseClick}) => {

    React.useEffect(() => { 
        console.log("empty array useEffect " + JSON.stringify(movie));
        // if(movie === null) {
        //     alert(`We're sorry we couldn't find the movie you're looking for`)
        // }
    }, [])

    return (
        movie !== null ? 
         <Modal isOpen={shouldOpen}>

            <div className="close" onClick={(event) => onCloseClick()}>
                    x
            </div>

             <div style={{
                    display:'flex', 
                    flex:1, 
                    height:'100%',
                    color:'white',
                    fontSize: '20px',
                    fontWeight: 'bold'
                    // backgroundColor:'#173f5f'
                }}>
                    <div className="poster_holder"
                         style={{
                             display:'flex',
                             flex:3,
                             justifyContent:'center'
                            //  backgroundColor:'purple'
                         }}>
                             <img src={movie.Poster} alt={movie.Title}/>

                    </div>

                    <div className="movie_content"
                         style={{
                             display:'flex',
                             flex:4,
                             backgroundColor:'#20639b'
                         }}
                    >
                        <div style={{
                            display:'flex',
                            flexDirection:'column',
                        }}>
                            <div style={{
                                display:'flex',
                                flexDirection:'row',
                                flex:1,
                                backgroundColor:'#20639b'
                            }}>
                                <div style={{
                                    display:'flex',
                                    flexDirection:'column',
                                    flex:1,
                                    justifyContent:'space-evenly',
                                    padding:'20px'
                                }}>
                                    <p>
                                        {"Title:"}
                                    </p>
                                    <p>
                                        {"Genre"}
                                    </p>
                                    <p>
                                        {"Director:"}
                                    </p>
                                    <p>
                                        {"Staring:"}
                                    </p>
                                    <p>
                                        {"Run Time:"}
                                    </p>

                                </div>
                                <div style={{
                                     display:'flex',
                                     flexDirection:'column',
                                     flex:1,
                                     justifyContent:'space-evenly',
                                     padding:'20px'
                                }}
                                >
                                    <p>
                                        {movie.Title}
                                    </p>
                                    <p>
                                        {movie.Genre}
                                    </p>
                                    <p>
                                        {movie.Director}
                                    </p>
                                    <p>
                                        {movie.Actors}
                                    </p>
                                    <p>
                                        {movie.Runtime}
                                    </p>

                                </div>
                            </div>
                            <div style={{
                                display:'flex',
                                flex:1,
                                backgroundColor:'#20639b',
                                padding:'20px',
                                flexDirection:'column'
                            }}>
                                <div>
                                    <p>
                                        {"Description:"}
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        {movie.Plot}
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        {movie.Awards}
                                    </p>
                                </div>

                                <div style={{
                                    display:'flex',
                                    flexDirection:'row'
                                }}>
                                    <div>
                                        <p>
                                            {"Imdb Score: "}
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            {movie.imdbRating}
                                        </p>
                                    </div>


                                </div>
                                <div style={{
                                    display:'flex',
                                    flexDirection:'row'
                                }}>
                                    <div>
                                            <p>
                                                {"Box Office: "}
                                            </p>
                                        </div>
                                    <div>
                                            <p>
                                                {movie.BoxOffice}
                                            </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
             </div>
        </Modal>
        : <div>
            
        </div>
    )
}

export default MovieModal;