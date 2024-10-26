import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import ChangePassword from "./components/ChangePassword";
import NewPassword from "./components/NewPassword";
import Profile from "./components/Profile";

function App() {
  const [loggedIn, setLoggedIn] = useState(null); 

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("access-token");
      const client = localStorage.getItem("client");
      const uid = localStorage.getItem("uid");

      if (!token || !client || !uid) {
        setLoggedIn(false); 
        return;
      }

      try {
        const response = await fetch("/auth/validate_token", {
          method: "GET",
          headers: {
            "access-token": token,
            client: client,
            uid: uid,
          },
        });

        if (response.ok) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (error) {
        setLoggedIn(false);
        localStorage.clear('access-token');
        localStorage.clear('uid');
        localStorage.clear('client');
        console.error("Validation error:", error);
        console.log(loggedIn)
      }
    };

    validateToken();
  }, []);

  if (loggedIn === null) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <Router>
        <div className="navbar">
          {/* {loggedIn ? ( */}
            <>
              <Link className="navbar-text" to="/">
                Home
              </Link>{" "}
              {"  |  "}
              <Link className="navbar-text" to="/profile">
                Profile
              </Link>
            </>
          { /* ) : ( */}
            <>
              <Link className="navbar-text" to="/login">
                Login
              </Link>{" "}
              {"  |  "}
              <Link className="navbar-text" to="/signup">
                Sign Up
              </Link>
            </>
          {/* )} */}
          {console.log(loggedIn)}
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/newPassword" element={<NewPassword />} />
            <Route
              path="/profile"
              element={loggedIn ? <Profile /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
