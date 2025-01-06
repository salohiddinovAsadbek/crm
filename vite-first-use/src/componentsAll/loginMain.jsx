import User from "../images/user.svg";
import Lock from "../images/lock.svg";
import "../assets/App.css";
import "../assets/login.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import mainLogoWhite from "../images/mainLogoWhite.svg";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  let [userName, setUserName] = useState("");
  let [userPassword, setPassword] = useState("");
  let [userInfo, setuserInfo] = useState(null);
  let [attempt, setAttempt] = useState(0);
  let [border, setBorder] = useState("#919191");
  let [placeName, setPlace] = useState("");
  let navigate = useNavigate();
  const LogIn = () => {
    if (userName !== "" && userPassword !== "") {
      fetch("http://194.87.161.66:5000/user/getUsers")
        .then((req) => {
          return req.json();
        })
        .then((data) => {
          console.log(data);
          const isUserExist = data.innerData.some((person) => {
            person.username === userName && person.password === userPassword;
          });
          setuserInfo(isUserExist ? { userName, userPassword } : false);
          setAttempt((prev) => prev + 1);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast.error("Please! Fill all places");
    }

    setUserName("");
    setPassword("");
  };

  useEffect(() => {
    if (userInfo === true) {
      toast.success("Success");
      navigate("/home");
    } else if (userInfo === false) {
      setBorder("#F30300");
      setPlace("inputError");
      toast.error("Kiritilgan ma'lumot xato!");
    }
  }, [attempt]);

  return (
    <>
      <div className="login d-flex j-between a-center">
        <div className="loginLeft d-flex d-column">
          <h1 className="loginTitle">Xush kelibsiz</h1>
          <p className="loginInfo">
            Xush kelibsiz, iltimos login va parolni kiriting
          </p>
          <div className="form w-100">
            <div className="formInputs w-100 d-flex d-column">
              <label
                htmlFor="user"
                className="w-100 d-flex j-between a-center forInputsWrap"
              >
                <input
                  type="text"
                  id="user"
                  // className="w-100"
                  className={`${placeName} w-100`}
                  placeholder="Login ni kiriting"
                  onChange={(e) => {
                    setUserName(e.target.value);
                    setPlace("");
                  }}
                  value={userName}
                  style={{ borderColor: border }}
                />
                <img src={User} alt="user.icon" />
              </label>
              <label
                htmlFor="password"
                className="w-100 d-flex j-between a-center forInputsWrap"
              >
                <input
                  type="text"
                  id="password"
                  className={`${placeName} w-100`}
                  placeholder="Parolni kiriting"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPlace("");
                  }}
                  value={userPassword}
                  style={{ borderColor: border }}
                />
                <img src={Lock} alt="lock.icon" />
              </label>
            </div>
            <button className="d-flex a-center j-center w-100" onClick={LogIn}>
              Kirish
            </button>
            <p className="d-flex j-center a-center w-100">
              <span>Akkauntingiz yo`qmi?</span>
              <NavLink>Akkount ochish</NavLink>
            </p>
          </div>
        </div>
        <div className="loginRight d-flex j-center a-center">
          <img src={mainLogoWhite} alt="mainLogo" />
        </div>
      </div>
      <Toaster />
    </>
  );
}
export default Login;
