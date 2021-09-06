import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import MovieDetailsComponent from "./Components/MovieDetails";
import TVDetailsComponent from "./Components/TVDetails";
import ViewAllDetailsComponent from "./Components/ViewAllDetails";
import LoadingComponent from "./Components/Loader";
import SearchResultsComponent from "./Components/SearchResults";

function App() {
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
