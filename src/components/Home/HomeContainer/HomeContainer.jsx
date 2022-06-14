import React, { useState } from "react";
import HomePresenter from "../HomePresenter/HomePresenter";
import { useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

export default function HomeContainer() {
  const [data, setData] = useState();
  const [waterLevel, setWaterLevel] = useState("");
  const [floodingProb, setFloodingPorb] = useState();

  useEffect(() => {
    const db = getDatabase();
    const baseStationRef = ref(db, "base_station/");
    onValue(baseStationRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
      if (data) {
        let waterLevel;
        if (data.isWater300) waterLevel = "Water level is above 300cm.";
        else if (data.isWater200) waterLevel = "Water level is above 200cm.";
        else waterLevel = "Water level is below 200cm.";
        setWaterLevel(waterLevel);

        let floodingProb;
        if (data.isWater200 && data.isWater300) {
          if (data.humidity > 85 && data.pressure < 1000)
            floodingProb = "DANGER";
          else floodingProb = "PROBABLY";
        } else if (data.isWater200) {
          if (data.humidity > 85 && data.pressure < 1000)
            floodingProb = "PROBABLY";
          else floodingProb = "MEDIUM";
        } else {
          if (data.humidity > 85 && data.pressure < 1000)
            floodingProb = "MEDIUM";
          else floodingProb = "LOW";
        }
        setFloodingPorb(floodingProb);
      }
    });
  }, []);

  return (
    <HomePresenter
      data={data}
      waterLevel={waterLevel}
      floodingProb={floodingProb}
    />
  );
}
