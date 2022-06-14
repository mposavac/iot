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
    <div>
      {data && (
        <div>
          <p>
            Temperature: <span>{data.temperature} °C</span>
          </p>
          <p>
            Humidity: <span>{data.humidity} %</span>
          </p>
          <p>
            Pressure: <span>{data.pressure} hPa</span>
          </p>

          <p>
            Water Level: <span>{waterLevel}</span>
          </p>
          <p>
            Flooding risk: <span>{renderProbabiltyText()}</span>
          </p>
        </div>
      )}
    </div>
  );
}
