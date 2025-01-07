import { NavLink } from "react-router-dom";
import mainLogoBlue from "../images/mainLogoBlur.svg";
import Img from "./img";
import "../assets/homeNavbar.css";
import "../assets/App.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import userPicture from "../images/Ellipse 1.svg";
function HomeNavbar() {
  let [navigate, setNavigate] = useState("");
  let navigation = useNavigate();
  let location = useLocation();
  const navbars = [
    {
      link: "Дом",
      src: "homeIconGrey",
      path: "/home",
      class: "",
      locate: "home",
      colorBlue: "",
    },
    {
      link: "Продукты",
      src: "productIconGrey",
      path: "/products",
      class: "",
      locate: "products",
      colorBlue: "",
    },
    {
      link: "Фирма",
      src: "companyIconGrey",
      path: "/company",
      class: "",
      locate: "company",
      colorBlue: "",
    },
    {
      link: "Склад",
      src: "keepIconGrey",
      path: "/login",
      class: "",
      locate: "keep",
      colorBlue: "",
    },
    {
      link: "Специалист",
      src: "prefessionalIconGrey",
      path: "/login",
      class: "",
      locate: "professional",
      colorBlue: "",
    },
    {
      link: "Возврат",
      src: "refreshIconGrey",
      path: "/login",
      class: "",
      locate: "refresh",
      colorBlue: "",
    },
    {
      link: "Архив",
      src: "archiveIconGrey",
      path: "/login",
      class: "",
      locate: "archive",
      colorBlue: "",
    },
  ];

  useEffect(() => {
    navigation(navigate);
  }, [navigate]);
  return (
    <div className="homeLeft d-flex a-center d-column">
      <NavLink to="/login" className="d-flex j-center a-center">
        <img src={mainLogoBlue} alt="mainLogoBlue" />
      </NavLink>
      <div className="wrapper d-flex d-column a-center j-start w-100">
        {navbars?.map((a) => {
          if (location.pathname === "/home" && a.locate === "home") {
            a.class = "homeNavbarBlue";
            a.src = "homeIconBlue";
            a.colorBlue = "homeNavbarInfoBlue";
          } else if (
            location.pathname === "/products" &&
            a.locate === "products"
          ) {
            a.class = "homeNavbarBlue";
            a.src = "productIconBlue";
            a.colorBlue = "homeNavbarInfoBlue";
          } else if (
            location.pathname === "/company" &&
            a.locate === "company"
          ) {
            a.class = "homeNavbarBlue";
            a.src = "companyIconBlue";
            a.colorBlue = "homeNavbarInfoBlue";
          } else if (location.pathname === "/keep" && a.locate === "keep") {
            a.class = "homeNavbarBlue";
            a.src = "keepIconBlue";
            a.colorBlue = "homeNavbarInfoBlue";
          } else if (
            location.pathname === "/professional" &&
            a.locate === "professional"
          ) {
            a.class = "homeNavbarBlue";
            a.src = "prefessionalIconBlue";
            a.colorBlue = "homeNavbarInfoBlue";
          } else if (
            location.pathname === "/refresh" &&
            a.locate === "refresh"
          ) {
            a.class = "homeNavbarBlue";
            a.src = "refreshIconBlue";
            a.colorBlue = "homeNavbarInfoBlue";
          } else if (
            location.pathname === "/archive" &&
            a.locate === "archive"
          ) {
            a.class = "homeNavbarBlue";
            a.src = "archiveIconBlue";
            a.colorBlue = "homeNavbarInfoBlue";
          }
          return (
            <>
              <button
                onClick={() => setNavigate(a.path)}
                className={`${a.class}  d-flex a-center`}
              >
                <Img src={`${a.src}`} />
                <p className={a.colorBlue}>{a.link}</p>
              </button>
            </>
          );
        })}
      </div>

      <div className="userInfo d-flex j-start a-center">
        <img src={userPicture} alt="userPicture" />
        <p className="d-flex d-column">
          <span>Jamshid Qodirov</span>
          <span>@jamshidqodirov</span>
        </p>
      </div>
    </div>
  );
}

export default HomeNavbar;
