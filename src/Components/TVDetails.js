import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from '../axios';
import requests from '../requests';
import '../Stylesheets/MovieDetails.css'
const TVDetailsComponent = (props) => {
    const [movie, setMovie] = useState([]);
    const [casts, setCast] = useState([]);
    const { id } = useParams();
    const defaultImgURL = "https://i.stack.imgur.com/34AD2.jpg"
    const imgBaseURL = "https://image.tmdb.org/t/p/w500";
    useEffect(() => {
        async function fetchMovie() {

            const request = await axios.get(`/tv/${id}?api_key=${requests.fetchApiKey}&language=en-US`)
            const castRequest = await axios.get(`/tv/${id}/credits?api_key=${requests.fetchApiKey}&language=en-US`)
            //console.log(request)
            setMovie(request.data)
            setCast(castRequest.data.cast)
        }
        fetchMovie();

    }, [id])
    console.log(movie)

    return (
        <div className="MovieDetailsBanner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}")`,
            backgroundPosition: "center center",
            height: "100vh"


        }}>
            <header className="navBackbtn">
                <Link to="/"><button className="backBtn">BACK</button></Link>
            </header>
            <div className="MovieDetails">
                <div className="movTitle">{movie.title ? movie.title:movie.name}</div>
                <div className="movDescription">{movie.overview}</div>

                <div className="movCastRow">
                    <h2>Cast</h2>
                    <div className="movCast">
                        {casts.map(cast => (

                            <Link to="/" style={{ textDecoration: "none" }} key ={cast.id}>
                                <img src={cast.profile_path ? `${imgBaseURL}${cast.profile_path}` : `${defaultImgURL}`} height={180} className="movCastImg" alt={cast.original_name} />
                                <div className="movCastName">{cast.original_name}</div>
                                <div className="movCastName">as</div>
                                <div className="movCastCharacter">{cast.character}</div>

                            </Link>


                        ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TVDetailsComponent;