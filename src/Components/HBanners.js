import { useState, useEffect } from "react";
import "../Stylesheets/HomeBanners.css";
import axios from "../axios";
import NavBarComponent from "./NavBarHeader";
import { Link } from "react-router-dom";

const BannerComponent = (props) => {
  //sconst imgBaseURL = "https://image.tmdb.org/t/p/w500";
  const [netMovie, setNetMovies] = useState([]);
  useEffect(() => {
    async function fetchNetData() {
      const netRequest = await axios.get(props.fetchURL);
      const movid = Math.floor(
        Math.random() * netRequest.data.results.length - 1
      );
      setNetMovies(netRequest.data.results[movid]);
      //console.log(movid);
    }
    fetchNetData();
  }, [props.fetchURL]);

  //console.log(netMovie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="homeBanner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${netMovie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <NavBarComponent />
      <div className="bannerContent">
        <div className="bannerTitle">{netMovie.name}</div>
        <div className="bannerDescription">
          {truncate(netMovie.overview, 150)}
        </div>
        <div className="">
          <Link to={`/tv/${netMovie.id}`} className="">
            <button className="playBtn">Play</button>
          </Link>
        </div>
      </div>
      <div className="bannerFadeBottom"></div>
    </div>
  );
};
export default BannerComponent;
