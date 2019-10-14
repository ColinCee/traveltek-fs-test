import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Statistics } from "./components/statistics";

const App: React.FC = () => {
  return (
    <div className="App">
      <Statistics />
    </div>
  );
};

export default App;
