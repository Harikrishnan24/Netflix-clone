import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import "../Stylesheets/DiscoverMovies.css";
const DiscoverMovieComponent = (props) => {
  const [movies, setMovies] = useState([]);
  const imgBaseURL = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchURL);
      //console.log(axios.get(props.fetchURL))
      //console.log(request.data.results)

      console.log(request.data);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [props.fetchURL]);
  console.log("From DIscover", movies);
  return (
    <div className="mrowData">
      <div className="rowTitle">
        <div>
          <h2 className="fieldTitle">{props.title}</h2>
        </div>
        <div>
          <Link to="/viewAll/movie" className="ViewAllBtn">
            View All
          </Link>
        </div>
      </div>

      <div className="mrowPosters">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <img
              className="mrowPostersImg"
              src={`${imgBaseURL}${movie.poster_path}`}
              alt={movie?.original_title || movie?.original_name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default DiscoverMovieComponent;
