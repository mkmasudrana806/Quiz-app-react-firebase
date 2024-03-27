import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/pages/Home";
import Quiz from "./components/pages/Quiz";
import Result from "./components/pages/Result";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
]);
