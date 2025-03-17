import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { MovieService } from "../../services/movie";
import classes from './Movies.module.css'

const Movies = () => {
    const service = new MovieService();
    const [movies, setMovies] = useState([])
    const [displayDetails, setDisplayDetails] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState('')
    
    function handleClick(id){
        setDisplayDetails(true);
        setSelectedMovie(id);
    }

    useEffect(() => {
        service.getAllMovies()
        .then(datas => {
            setMovies(datas);
        })
    },[])

    if(displayDetails) {
        return(
            <div className={classes["movie-page"]}>
                <MovieDetails id={selectedMovie}/>
            </div>
        )
    } else {
        return (
            <div className={classes["movie-page"]}>
                <h1>Films</h1>
                <MoviesList movies={movies} handleClick={handleClick}/>
            </div>
        )
    }
}

export default Movies;