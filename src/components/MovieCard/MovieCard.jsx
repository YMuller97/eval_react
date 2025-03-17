import classes from './MovieCard.module.css';

const MovieCard = ({movie, handleClick}) => {
        return(
        <div className={classes['movie-card']} onClick={() => handleClick(movie.id)}>
            <img src={movie.image}></img>
            <div className={classes['movie-card-content']}>
                <h2>{movie.title}</h2>
                <p>{movie.releaseDate}</p>
            </div>
        </div>
    )   
}

export default MovieCard;