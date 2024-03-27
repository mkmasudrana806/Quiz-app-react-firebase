import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Home from "../components/pages/Home";
import Quiz from "../components/pages/Quiz";
import Result from "../components/pages/Result";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

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
        element: (
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/quiz",
        element: (
          <PrivateRoute>
            <Quiz />
          </PrivateRoute>
        ),
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
]);
