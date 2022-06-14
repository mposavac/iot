import React, { useEffect } from "react";
import MyDevicePresenter from "../MyDevicePresenter/MyDevicePresenter";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

export default function MyDeviceContainer() {
  const [userId, setUserId] = useState();
  const [isFlooding, setIsFlooding] = useState();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserId(uid);
      }
    });
  }, []);

  useEffect(() => {
    if (userId) {
      const db = getDatabase();
      const baseStationRef = ref(db, `${userId}/`);
      onValue(baseStationRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        if (data) {
          setIsFlooding(data.isFlooding);
          if (data.isFlooding)
            window.alert("DANGER! WATER DETECTED! Your object is flooding!");
        }
      });
    }
  }, [userId]);
  return <MyDevicePresenter isFlooding={isFlooding} />;
}
