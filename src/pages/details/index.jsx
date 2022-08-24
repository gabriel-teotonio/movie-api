
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./style";
import { Link } from "react-router-dom";

const APIkey = "f99d6b6c84ce1bb43df3befcbf38ab2a"
const imagePath = `https://image.tmdb.org/t/p/w500/`


export function Details() {

const {useId} = useParams()
const [movie, setMovie] = useState({})


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${useId}?api_key=${APIkey}&language=pt-BR`)
            .then(response => response.json())
            .then(dataMovie => {
                const { title, release_date, overview, poster_path } = dataMovie
                const movie = {
                    useId,
                    title,
                    sinopse: overview,
                    image: `${imagePath}${poster_path}`,
                    releaseDate: release_date
                }
                setMovie(movie)
            })
    }, [useId])

    return (
         <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.title} />
                <div className="details">
                    <h2>{movie.title}</h2>
                    <div>
                    <p><b>Descrição</b></p>
                    <p>{movie.sinopse}</p>
                    </div>
                    <p className="release-date"><b>Data de lançamento:</b> {movie.releaseDate}</p>
                    <Link to="/"><button className="btn-back">Voltar</button></Link>
                </div>  
            </div>
         </Container>
    );
}