import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./History";
import MainLayout from "../Containers/MainLayout/MainLaout";

const Routes = (
  <Router history={history}>
    <Route path="/" component={MainLayout} />
  </Router>
);

export default Routes;
