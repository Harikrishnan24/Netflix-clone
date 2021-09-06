import React, { useState, useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "../axios";
import "../Stylesheets/MovieCardRowComponents.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
const MovieCardRowComponent = (props) => {
  const [movies, setMovies] = useState([]);
  const imgBaseURL = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchURL);
      //console.log(axios.get(props.fetchURL))
      //console.log(request.data.results)

      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [props.fetchURL]);
  console.log(movies);
  /*const listRef = useRef();
  var x = 0;
  const handleArrowClick = (dir) => {
    const distance = listRef.current.getBoundingClientRect().x - 50;
    if (dir === "left") {
      if (x < 0) {
        console.log("from Left", x, distance);
        listRef.current.style.transform = `translateX(${100 + x}px)`;
        x = x + 100;
      }
    } else {
      if (x > -3500) {
        console.log("from right", x, distance);
        listRef.current.style.transform = `translateX(${-100 + x}px)`;
        x = -100 + x;
      }
    }
  };

  console.log("ListRef is", listRef);*/
  return (
    <div className="rowData">
      <div className="rowTitle">
        <div>
          <h2 className="fieldTitle">{props.title}</h2>
        </div>
      </div>

      <div className="rowPosters">
        {movies.map((movie) => (
          <Link
            to={`/${movie.media_type}/${movie.id}`}
            className="rowPostersImg"
            key={movie.id}
          >
            <img
              height={250}
              style={{ objectFit: "contain" }}
              src={`${imgBaseURL}${movie.poster_path}`}
              alt={movie?.original_title || movie?.original_name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MovieCardRowComponent;
