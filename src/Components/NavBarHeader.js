import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "../Stylesheets/NavBarHeaderComponent.css";
import { handleSearchText } from "../actions";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
const NavBarComponent = () => {
  const [navShow, setNavShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        setNavShow(true);
      } else {
        setNavShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  const history = useHistory();
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      dispatch(handleSearchText(query));
      history.push("/search");
    }
  };
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  return (
    <div className={`nav_bar`}>
      <div className={`navBarHeader ${navShow && "nav_black"}`}>
        <div className={`searchFull ${navShow && "searchFullShow"}`}>
          <div className="search_field">
            <input
              type="text"
              className={`searchTextField_black`}
              placeholder="Search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="search_icon">
            <Link to={query ? "/search" : "/"} className="searchIcon">
              <FaSearch
                onClick={() => {
                  dispatch(handleSearchText(query));
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBarComponent;
