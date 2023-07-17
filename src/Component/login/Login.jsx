import React, { useState } from "react";

const Login = ({el}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("login",Login);
  const handleLogin = () => {
      el(email, password);
  };

  return (
    <div className="login">
        <div >
          <div
            style={{
           
            }}
          ></div>
          <div
            style={{
         
            }}
          >
            <h1 >Sign in</h1>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                autoFocus
                style={{ marginBottom: "8px" }}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                style={{ marginBottom: "8px" }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  padding: "8px 16px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Sign In
              </button>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
              
              
              </div>
            </form>
          </div>
        </div>
      </div>
    

  )
};

export default Login;
