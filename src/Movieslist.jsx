import { Link } from "react-router-dom"

function Movieslist({movies , title})
{
    return(

        <div className="movies-list">

            <h1>{title}</h1>
        {
            movies.map((movie)=>{
                return(
                    <Link to={`/moviedetail${movie.id}`}>
                    <div className="movies">
                        
                        <img src={movie.poster}/>
                        <h1>{movie.movieName}</h1>
                        <h2>{movie.hero}</h2>
                        <h3>Rating: {movie.rating}</h3>
                    </div>
                    </Link>
                )
            })
        }
    </div>

    )
}

export default Movieslist