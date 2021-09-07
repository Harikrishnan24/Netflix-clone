import { useState, useEffect } from "react";
import {
  FaStar,
  FaAngry,
  FaSmileBeam,
  FaRegGrinStars,
  FaLaugh,
  FaSmile,
  FaMeh,
  FaFrown,
} from "react-icons/fa";
import "../Stylesheets/ratingComponent.css";
const RatingComponent = (props) => {
  const [color, setColor] = useState("orange");
  const [faceIcon, setFaceIcon] = useState("");
  const rating = props.rating;
  console.log(rating);
  useEffect(() => {
    async function changeColor() {
      if (rating >= 0 && rating < 4) {
        setColor("#ef1b26");
      } else if (rating >= 5 && rating < 7) {
        setColor("#f49830");
      } else if (rating >= 7 && rating < 7.5) {
        setColor("#c2da40");
      } else if (rating >= 7.5 && rating < 8.5) {
        setColor("#96ca3d");
      } else if (rating >= 8.5) {
        setColor("#2fb24c");
      }
    }
    changeColor();
  }, [rating]);

  const faceIconEmojis = (rating) => {
    if (rating >= 0 && rating < 4) {
      return (
        <div>
          <FaAngry style={{ color: `${color}`, fontSize: "20px" }} />
        </div>
      );
    } else if (rating >= 5 && rating < 6.5) {
      return (
        <div>
          <FaFrown style={{ color: `${color}`, fontSize: "20px" }} />
        </div>
      );
    } else if (rating >= 6.5 && rating < 7.5) {
      return (
        <div>
          <FaMeh style={{ color: `${color}`, fontSize: "20px" }} />
        </div>
      );
    } else if (rating >= 7.5 && rating < 8.5) {
      return (
        <div>
          <FaSmile style={{ color: `${color}`, fontSize: "20px" }} />
        </div>
      );
    } else if (rating >= 8.5) {
      return (
        <div>
          <FaSmile style={{ color: `${color}`, fontSize: "20px" }} />
        </div>
      );
    }
  };
  //console.log("Color", color);
  return (
    <div className="ratingComponent">
      <div style={{ flex: "0.4", fontSize: "20px" }}>Rating : </div>
      <div style={{ flex: "0.3" }}>{rating} /10</div>
      <div style={{ flex: "0.2" }}>{faceIconEmojis(rating)}</div>
    </div>
  );
};
export default RatingComponent;
