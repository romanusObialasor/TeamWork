import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { app } from "./base";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [cKey, setCkey] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = async () => {
    localStorage.setItem("comkey", cKey);
    await app.auth().signInWithEmailAndPassword(email, password);
    setEmail("");
    setPassword("");
    history.push("/user");
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
        <input
          type="text"
          placeholder="Company's key"
          value={cKey}
          onChange={(e) => {
            setCkey(e.target.value);
          }}
        />
        <button onClick={signIn}>Sign In</button>
      </div>
    </div>
  );
};

export default SignIn;
