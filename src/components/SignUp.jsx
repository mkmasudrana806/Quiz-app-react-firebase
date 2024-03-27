import Illustration from "./Illustration";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SignUpForm />
      </div>
    </>
  );
};

export default SignUp;
