import "./App.css";
import { useEffect } from "react";
import MovieCardRowComponent from "./Components/MovieCardsRow";
import DiscoverMovieComponent from "./Components/DiscoverMovie";
import requests from "./requests";
import BannerComponent from "./Components/HBanners";
import NavBarComponent from "./Components/NavBarHeader";
function HomePage() {
  useEffect(() => {
    document.title = "Netflix-Clone";
  }, []);
  return (
    <div className="App">
      <BannerComponent fetchURL={requests.fetchNetflixOriginal} />
      <MovieCardRowComponent
        title="Trending Now"
        fetchURL={requests.fetchTrending}
      />
      <DiscoverMovieComponent
        title="Discover Movies"
        fetchURL={requests.fetchDiscovers}
      />
    </div>
  );
}

export default HomePage;
