import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import RoutesConfig from "./Routes/RoutesConfig";

const App = () => {
  return (
    <Router>
      <RoutesConfig />
    </Router>
  );
};

export default App;
