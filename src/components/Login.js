import React, { useState, useEffect } from "react";

const Login = ({ voiceControl, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (voiceControl) {
      window.addEventListener("voice-login", handleVoiceLogin);
      return () => {
        window.removeEventListener("voice-login", handleVoiceLogin);
      };
    }
  }, [voiceControl]);

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform validation on username and password, e.g. ensure they're not empty strings
    if (!username || !password) {
      setErrorMessage("Please enter a valid username and password");
      return;
    }
    onLogin(username);
  };

  const handleVoiceLogin = (event) => {
    const { username: voiceUsername, password: voicePassword } = event.detail;
    setUsername(voiceUsername);
    setPassword(voicePassword);
    onLogin(voiceUsername);
  };

  return (
    <div className="page-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;