import { Link } from "react-router-dom";
import lwsLogo from "../../images/logo-bg.png";
import classes from "../../styles/Nav.module.css";
import Account from "./Account";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to={"/"} className={classes.brand}>
            <img src={lwsLogo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Navbar;
