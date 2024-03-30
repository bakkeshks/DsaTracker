import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DsaProvider } from "./context/DsaContext";
import { AuthProvider } from "./context/AuthContext";

import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <DsaProvider>
        <AuthProvider>
          <Header />
        </AuthProvider>
      </DsaProvider>
    </Router>
  );
};

export default App;
