import React, { useState, useEffect } from "react";
import { app } from "./base";
import firebase from "firebase";

const OverView = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const authuser = app.auth().currentUser;
    if (authuser) {
      app
        .firestore()
        .collection("Register")
        .doc(authuser.uid)
        .collection("adminTodo")
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
  return (
    <div>
      <div>OverView</div>
    </div>
  );
};

export default OverView;
