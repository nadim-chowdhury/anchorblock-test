import "./App.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Users from "./Users";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
