import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";

const BackBtnComponent = (props) => {
  const path = props.path;
  const location = useLocation();
  const history = useHistory();
  return (
    <header className="navBackbtn">
      <button className="backBtn" onClick={() => history.goBack()}>
        BACK
      </button>
    </header>
  );
};
export default BackBtnComponent;
