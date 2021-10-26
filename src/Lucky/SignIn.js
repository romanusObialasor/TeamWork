import React, { useState, useEffect } from "react";
import useHistory from "react-router-dom";
import { app } from "./base";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ckey, setCkey] = useState("");
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
          value={ckey}
          onChange={(e) => {
            setCkey(e.target.value);
          }}
        />
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default SignIn;
