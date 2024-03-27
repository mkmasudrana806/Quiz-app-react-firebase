import { Outlet } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import classes from "../styles/Layout.module.css";
import Navbar from "./navbar/Navbar";

const Layout = () => {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <main className={classes.main}>
          <div className={classes.container}>
            <Outlet />
          </div>
        </main>
      </div>
    </AuthProvider>
  );
};

export default Layout;
