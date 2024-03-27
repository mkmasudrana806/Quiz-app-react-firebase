import { AuthProvider } from "../contexts/AuthContext";
import "../styles/app.css";
import Layout from "./Layout";

const App = () => {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
};

export default App;
