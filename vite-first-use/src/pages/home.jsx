import HomeNavbar from "../componentsAll/homeNavbar";
import TopControl from "../componentsAll/topControl";
import "../assets/App.css";
import { createContext, useState } from "react";
function Home() {
  return (
    <div className="d-flex padding20 gap20">
      <HomeNavbar />
      <div className="homeRight">
        <TopControl
          title="Дом"
          createInfo="Создать продукт"
          path="home"
          block="none"
        />
      </div>
    </div>
  );
}

export default Home;
