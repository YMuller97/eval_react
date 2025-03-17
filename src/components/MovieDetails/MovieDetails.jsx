import { MovieService } from "../../services/movie";
import { useEffect, useState } from "react";
import classes from './MovieDetails.module.css';
const MovieDetails = ({id}) => {
    const service = new MovieService();
    const [movie, setMovie] = useState('');

    useEffect(() => { 
        console.log("id : ", id)
        service.getMovieById(id)
        .then(movie => {
            setMovie(movie);
        })
    },[])

    console.log(movie);

    return (
        <div className={classes['movie-details']}>
            <div className={classes['movie-header']}>
                <h1>{movie.title}</h1>
                <div className={classes['movie-actions']}>
                    <button onClick={console.log("to do")}>Edit</button>
                    <button onClick={service.deleteMovie(id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;