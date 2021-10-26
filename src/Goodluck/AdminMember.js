import React, { useState, useEffect } from "react";
import { app } from "./base";
import firebase from "firebase";

const AdminMember = () => {
  const [data, setData] = useState("");

  const getData = () => {
    const authuser = app.auth().currentUser;
    if (authuser) {
      app
        .firestore()
        .collection("Register")
        .doc(authuser.uid)
        .collection("user")
        .onSnapshot((snapshot) => {
          const item = [];
          snapshot.forEach((doc) => {
            item.push({ ...doc.data(), id: doc.id });
          });
          setData(item);
          console.log(data);
        });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>AdminMember</div>;
};

export default AdminMember;
