import MovieCard from "../MovieCard/MovieCard.jsx";
import classes from './MoviesList.module.css';

const MoviesList = ({movies, handleClick}) => {
    const list = movies;
    const MovieList = list.map((m) => {
        return(<MovieCard key={m.id} movie={m} handleClick={handleClick}/>)
    });


    return (
        <div className={classes['movies-grid']}>
            {MovieList}
        </div>
    )
}

export default MoviesList;