import React from "react";
import "./MyDevicePresenter.scss";

export default function MyDevicePresenter({ isFlooding }) {
  return (
    <div className="devices">
      <div className="status">
        <p>Object status: </p>
        <span>{isFlooding ? "YOUR OBJECT IS FLOODING!" : "Your object is safe."}</span>
      </div>
      
    </div>
  );
}
