import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles/login.css";
import { useAuth } from "../utils/useAuth";

export function Login() {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username.trim() == "") {
      setError("Please enter a username.");
    } else {
      const userData = { id: Date.now(), username: username };
      login(userData);
      setUsername("");
      setError("");
    }
  };

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    if (location.state && location.state.fromMenu) {
      navigate("/menu");
    }
  }, [location.state]);

  return (
    <section className="login-container">
      {user ? (
        <div className="content">
          <h1>Welcome, {user.username}!</h1>
          <button onClick={handleLogout} className="btn">
            Log Out
          </button>
        </div>
      ) : (
        <div className="content">
          {location.state && location.state.message && (
            <h2>{location.state.message}</h2>
          )}
          <h1>Please Login to your account</h1>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin} className="btn">
            Log In
          </button>
          {error && <p>{error}</p>}
        </div>
      )}
    </section>
  );
}
