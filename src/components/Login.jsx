import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Login.module.css";
import Button from "./Button";
import Form from "./Form";
import Illustration from "./Illustration";
import TextInput from "./TextInput";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    login(email, password)
      .then((user) => {
        console.log("current logged in user in login component: " + user);
        setError("");
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.log("error in login component", err);
        setLoading(false);
        setError("Failed to login");
      });
  };
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form onSubmit={handleLogin} className={`${classes.login}`}>
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextInput
            type="password"
            placeholder="Enter password"
            icon="lock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button disabled={loading} type="submit">
            <span>Submit now</span>
          </Button>
          {error && <span className="error">{error}</span>}
          <div className="info">
            Don't have an account? <Link to={"/signup"}>Signup</Link> instead.
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
