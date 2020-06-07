import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes/Routes";
import History from "./routes/History";
import './scss/base.scss';
function App() {
  return <Router history={History}>{Routes}</Router>;
}

export default App;
