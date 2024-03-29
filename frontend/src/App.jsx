import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DsaProvider } from "./context/DsaContext";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <DsaProvider>
        <Header />
      </DsaProvider>
    </Router>
  );
};

export default App;
