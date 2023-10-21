import { useState } from "react";
// import { useLoaderData, useNavigate, redirect } from "react-router-dom";
import { useAuth } from "../utils/useAuth";

// export function loader({ request }) {
//   return new URL(request.url).searchParams.get("message");
// }

export function Login() {
  const { user, login, logout } = useAuth();

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

  return (
    <section className="login-container">
      {user ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          <h1>Please Login to your account</h1>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Log In</button>
          {error && <p>{error}</p>}
        </div>
      )}
    </section>
  );
}
