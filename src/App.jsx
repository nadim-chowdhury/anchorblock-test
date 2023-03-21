import "./App.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Users from "./Users";
// import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route
          path="dashboard"
          element={
            // <PrivateRoute>
            <Dashboard />
            // </PrivateRoute>
          }
        />
        <Route path="dashboard/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
