import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup, loading } = useAuth();
  console.log(loading);

  const submitForm = async (e) => {
    e.preventDefault();

    // password validation
    if (password !== confirmPassword) {
      return setError("Password dosn't match");
    }

    try {
      setError("");
      await signup(email, password, username);
      navigate("/");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Form onSubmit={submitForm} style={{ height: "500px" }}>
      <TextInput
        type="text"
        placeholder="Your usrename"
        icon="person"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <TextInput
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextInput
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        require
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Checkbox
        text={" I agree to the Terms &amp; conditions"}
        required
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />

      <Button disabled={loading} type="submit">
        <span>Submit now</span>
      </Button>

      {/* error message  */}
      {error !== "" && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to={"/login"}>Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignUpForm;
