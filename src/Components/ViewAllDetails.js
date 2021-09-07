import axios from "../axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import requests from "../requests";
import "../Stylesheets/ViewAll.css";
import { Link } from "react-router-dom";
import BackBtnComponent from "./BackBtn";
import { useSelector, useDispatch } from "react-redux";
import { handleNextButton, handlePrevButton } from "../actions";
import LoadingComponent from "./Loader";
const ViewAllDetailsComponent = (props) => {
  const { type } = useParams();
  const [movie, setMovie] = useState([]);
  //const [pageNo, setPageNo] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const imgBaseURL = "https://image.tmdb.org/t/p/w500";
  const pageNo = useSelector((state) => state.handlePageBtns);
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Movies";
    setLoaded(false);
    async function fetchMovies() {
      const linkUpdate = `/discover/movie?api_key=${requests.fetchApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNo}&with_watch_monetization_types=flatrate`;
      const request = await axios.get(linkUpdate);
      setLoaded(true);
      setMovie([request.data.results]);
    }
    fetchMovies();
  }, [pageNo]);
  //console.log(pageNo);
  // console.log(movie);
  return (
    <div className="viewAll">
      <BackBtnComponent />
      <h1 style={{ padding: "10px" }}>Discover Movies</h1>

      <div className="moviePosters">
        {loaded ? (
          movie.map((movies) =>
            movies.map(
              (mmovies) => {
                return (
                  <Link to={`/movie/${mmovies.id}`} key={mmovies.id}>
                    <img
                      className="mViewAllPostersImg"
                      src={`${imgBaseURL}${mmovies.poster_path}`}
                      alt={mmovies?.original_title || mmovies?.original_name}
                    />
                  </Link>
                );
              }
              //return <div>Hello</div>;
            )
          )
        ) : (
          <LoadingComponent />
        )}
      </div>
      <div className="pageNumber">
        <button
          className="changePageBtns"
          onClick={() => {
            if (pageNo > 1) dispatch(handlePrevButton());
          }}
        >
          Previous
        </button>

        <div className="pagenumberText">{pageNo}</div>
        <button
          className="changePageBtns"
          onClick={() => {
            if (pageNo < 20) dispatch(handleNextButton());
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default ViewAllDetailsComponent;
