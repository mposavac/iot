import React from "react";
import "./HomePresenter.scss";

export default function HomePresenter({ data, waterLevel, floodingProb }) {
  const renderProbabiltyText = () => {
    switch (floodingProb) {
      case "LOW":
        return "Very low probabilty of flooding.";
      case "MEDIUM":
        return "Be cautious! Water may rise.";
      case "PROBABLY":
        return "Be cautious! There is a considerable chance of flooding.";
      case "DANGER":
        return "ALERT! Water level is rising. High probability of flooding.";
      default:
        return "Calculating risk...";
    }
  };

  return (
    <div className="home">
      {data && (
        <div className="home-data">
          <div className="flex-between">
            <div>
              <p>
                Temperature: 
              </p> 
              <span>{data.temperature} °C</span>
            </div>
           
           <div>
            <p>
              Humidity: 
            </p>
            <span>{data.humidity} %</span>
           </div>

           <div>
            <p>
              Pressure: 
            </p>
            <span>{data.pressure} hPa</span>
           </div>
            
          </div>
          
          <div className="level gap">
            <p className="">
              Water Level: 
            </p>
            <span>{waterLevel}</span>
          </div>
          
          <div className="risk gap">
            <p >
              Flooding risk: 
            </p>
            <span>{renderProbabiltyText()}</span>
          </div>
          
        </div>
      )}
    </div>
  );
}
