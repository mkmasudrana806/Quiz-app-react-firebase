import { Link } from "react-router-dom";
import photo from "../images/3.jpg";
import classes from "../styles/Video.module.css";

const Video = () => {
  return (
    <Link to={"/video/1"}>
      <div className={classes.video}>
        <img src={photo} alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </Link>
  );
};

export default Video;
