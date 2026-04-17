import { useState } from "react";
import { loginUser } from "../api/studentApi";
import { setToken } from "../utils/auth";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (username.length === 0 || password.length === 0) {
      setError("Please enter both username and password.");
      return;
    }

    setLoading(true);
    try {
      const res = await loginUser({ username, password });
      setToken(res.data.token);
      window.location.href = "/";
    } catch (err: any) {
      if (err.response?.data) {
        if (typeof err.response.data === 'string') {
          setError(err.response.data);
        } else {
          setError("Invalid credentials. Please try again.");
        }
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="glass-panel auth-box">
        <div className="auth-header">
          <h1>Welcome Back</h1>
          <p style={{ color: "var(--text-secondary)" }}>Log in to access your dashboard</p>
        </div>

        {error && <p style={{ color: "var(--error-color)", marginBottom: "1rem", textAlign: "center" }}>{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              className="input-field"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="input-field"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "1rem" }}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account? <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
}