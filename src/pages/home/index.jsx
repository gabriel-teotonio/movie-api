
import { Container, Movie, MovieList } from "./style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const APIkey = "f99d6b6c84ce1bb43df3befcbf38ab2a"
const imagePath = `https://image.tmdb.org/t/p/w500/`

export function Home() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIkey}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(dataMovie => setMovies(dataMovie.results))
    }, [])

    
    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>
            {
                movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}><img src={`${imagePath}${movie.poster_path}`} alt={movie.title} img/></Link>
                            <p>{movie.title}</p>
                        </Movie>
                    )
                })
            }
            </MovieList>
        </Container>
    );
}