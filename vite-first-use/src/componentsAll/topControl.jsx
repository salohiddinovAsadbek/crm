import Search from "../images/search-normal.svg";
import "../assets/App.css";
import "../assets/topControl.css";
import { useState } from "react";
import CreateButton from "./createButton";
function TopControl({ title, createInfo, path, inputs, block, h1Title }) {
  return (
    <div className="topControl d-flex j-between">
      <h1>{title}</h1>
      <div className="topControlBtns d-flex gap20 a-center">
        <div></div>
        <div
          className="h-100 borderRadius10 searchBtn d-flex a-center gap20"
          style={{ display: block }}
        >
          <img src={Search} alt="searchIcon" />
          <input
            type="text"
            className="h-100 w-100 borderRadius10"
            placeholder="Поиск продуктов"
            onChange={(e) => {}}
          />
        </div>
        <CreateButton
          title={createInfo}
          path={path}
          inputs={inputs}
          h1Title={h1Title}
        />
      </div>
    </div>
  );
}

export default TopControl;
