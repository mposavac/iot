import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes as Routing,
} from "react-router-dom";
import HomeContainer from "../components/Home/HomeContainer/HomeContainer";
import LoginContainer from "../components/Login/LoginContainer/LoginContainer";
import MyDeviceContainer from "../components/MyDevice/MyDeviceContainer/MyDeviceContainer";
import NavigationContainer from "../components/Navigation/NavigationContainer/NavigationContainer";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <Router>
      <NavigationContainer />
      <Routing>
        <Route path="/login" element={<LoginContainer />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomeContainer />
            </PrivateRoute>
          }
        />
        <Route
          path="/my-devices"
          element={
            <PrivateRoute>
              <MyDeviceContainer />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routing>
    </Router>
  );
};

export default Routes;
