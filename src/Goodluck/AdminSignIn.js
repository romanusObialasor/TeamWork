import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { app } from "./base";

const AdminSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const AdminSignIn = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
    setEmail("");
    setPassword("");
    history.push("/admin");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={AdminSignIn}>Sign In</button>
      </div>
    </div>
  );
};

export default AdminSignIn;
