import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import MovieDetailsComponent from "./Components/MovieDetails";
import TVDetailsComponent from "./Components/TVDetails";
import ViewAllDetailsComponent from "./Components/ViewAllDetails";
import LoadingComponent from "./Components/Loader";
import SearchResultsComponent from "./Components/SearchResults";
import ReactGa from "react-ga";
import firebaseConfig from "./gtag";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
function App() {
  useEffect(() => {
    /*ReactGa.initialize(firebaseConfig.measurementId);
    console.log("ID", firebaseConfig.measurementId);
    ReactGa.pageview(window.location.pathname + window.location.search);*/
    /*const app1 = initializeApp(firebaseConfig);*/
    const analytics = getAnalytics();
    //console.log(analytics);
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/movie/:id">
            <MovieDetailsComponent />
          </Route>
          <Route path="/tv/:id">
            <TVDetailsComponent />
          </Route>
          <Route path="/viewAll/:type">
            <ViewAllDetailsComponent />
          </Route>
          <Route path="/loader">
            <LoadingComponent />
          </Route>
          <Route path="/search">
            <SearchResultsComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
