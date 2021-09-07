import axios from "../axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import requests from "../requests";
import "../Stylesheets/ViewAll.css";
import { Link } from "react-router-dom";
import BackBtnComponent from "./BackBtn";
import { useSelector, useDispatch } from "react-redux";
import { handleSearchNextButton, handleSearchPrevButton } from "../actions";
import LoadingComponent from "./Loader";
const SearchResultsComponent = (props) => {
  const { type } = useParams();
  const [movie, setMovie] = useState([]);
  //const [pageNo, setPageNo] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const imgBaseURL = "https://image.tmdb.org/t/p/w500";
  const pageNo = useSelector((state) => state.handleSearchPageBtns);
  const query = useSelector((state) => state.handleSearchText);
  console.log("Query is", query);
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = `Search results for  ${query}`;
    setLoaded(false);
    async function fetchMovies() {
      const linkUpdate = `search/multi?api_key=${requests.fetchApiKey}&language=en-US&query=${query}&page=${pageNo}include_adult=false`;
      const request = await axios.get(linkUpdate);
      setLoaded(true);
      setMovie(request.data.results);
    }
    fetchMovies();
  }, [pageNo]);

  //console.log(pageNo);
  //console.log("Movie", movie);
  return (
    <div className="viewAll">
      <BackBtnComponent />
      <h1 style={{ padding: "20px" }}>Search Results</h1>
      <div className="searchPosters">
        {loaded ? (
          movie.length > 0 ? (
            movie.map((result) => {
              if (
                result.backdrop_path ||
                result.poster_path ||
                result.profile_path
              ) {
                return (
                  <div className="colsImg">
                    <Link
                      to={`/${result.media_type}/${result.id}`}
                      key={result.id}
                    >
                      <img
                        className="mSearchPostersImg"
                        src={`${imgBaseURL}${
                          result.backdrop_path
                            ? result.backdrop_path
                            : result.poster_path || result.profile_path
                        }`}
                        alt={result?.original_title || result?.original_name}
                      />
                    </Link>
                  </div>
                );
              }
            })
          ) : (
            <div>No results found</div>
          )
        ) : (
          <LoadingComponent />
        )}
      </div>
      {/* <div className="moviePosters">
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
              if (pageNo > 1) dispatch(handleSearchPrevButton());
            }}
          >
            Previous
          </button>

          <div className="pagenumberText">{pageNo}</div>
          <button
            className="changePageBtns"
            onClick={() => {
              if (pageNo < 20) dispatch(handleSearchNextButton());
            }}
          >
            Next
          </button>
        </div>*/}
    </div>
  );
};
export default SearchResultsComponent;
