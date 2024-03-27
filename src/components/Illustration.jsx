import illustrationLogo from "../images/signup.svg";
import classes from "../styles/Illustration.module.css";

const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <img src={illustrationLogo} alt="Signup" />
    </div>
  );
};

export default Illustration;
