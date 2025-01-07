import HomeNavbar from "../componentsAll/homeNavbar";
import TopControl from "../componentsAll/topControl";
import "../assets/App.css";
import { useState } from "react";
import Img from "../componentsAll/img";
import "../assets/home.css";
function Home() {
  const data = [
    {
      title: "Общая выгода",
      countData: "+234 000 000",
      imageicon: <Img src="dollarArrow" />,
    },
    {
      title: "Общая выгода",
      countData: "-13 376 036 182",
      imageicon: <Img src="receiptItem" />,
    },
    {
      title: "Ежемесячные Выгода",
      countData: "+234 000 000",
      imageicon: <Img src="emptyWallet" />,
    },
    {
      title: "Ежемесячные расходы",
      countData: "-13 376 036 182",
      imageicon: <Img src="receiptMinus" />,
    },
    {
      title: "Ежемесячные Выгода",
      countData: "0",
      imageicon: <Img src="dollarCircle" />,
    },
    {
      title: "Ежемесячные расходы",
      countData: "0",
      imageicon: <Img src="transactionMinus" />,
    },
    {
      title: "Текущий счет",
      countData: "-13 376 036 182",
      imageicon: <Img src="walletCheck" />,
    },
    {
      title: "Ожидаемый доход",
      countData: "-13 376 036 182",
      imageicon: <Img src="clockHome" />,
    },
    {
      title: "Общий долг фирм",
      countData: "-13 376 036 182",
      imageicon: <Img src="cardHome" />,
    },
    {
      title: "Общий складской счет",
      countData: "-13 376 036 182",
      imageicon: <Img src="strongBox" />,
    },
    {
      title: "",
      countData: "",
      imageicon: <Img src="" />,
    },
    {
      title: "",
      countData: "",
      imageicon: <Img src="" />,
    },
  ];

  return (
    <div className="d-flex padding20 gap20">
      <HomeNavbar />
      <div className="homeRight w-1045 d-flex d-column gap20">
        <TopControl
          title="Дом"
          createInfo="Создать продукт"
          path="home"
          block="none"
        />
        <div className="wrapperHome1 d-flex gap20 f-wrap">
          {data.map((a) => {
            return (
              <div className="homeAllCount d-flex gap20 a-center borderRadius10 j-center">
                <span>{a.imageicon}</span>
                <p className="d-flex d-column ">
                  <span>{a.title}</span>
                  <span>{a.countData}</span>
                </p>
              </div>
            );
          })}
        </div>
        <div className="sparePlace borderRadius10"></div>
      </div>
    </div>
  );
}

export default Home;
