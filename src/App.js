import React from "react";
import "./App.scss";
import Approutes from "./components/appRoutes/Approutes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <main>
      <Header />
      <div>
        <Approutes />
      </div>
      <Footer />
    </main>
  );
};

export default App;
