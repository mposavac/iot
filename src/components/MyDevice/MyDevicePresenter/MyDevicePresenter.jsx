import React from "react";
import "./MyDevicePresenter.scss";

export default function MyDevicePresenter({ isFlooding }) {
  return (
    <div>
      <p>Object status: </p>
      <p>{isFlooding ? "YOUR OBJECT IS FLOODING!" : "Your object is safe."}</p>
    </div>
  );
}
