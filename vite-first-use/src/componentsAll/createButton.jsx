import "../assets/App.css";
import "../assets/createButton.css";
import { useState } from "react";
import { useEffect } from "react";

function CreateButton({ path, title, inputs, h1Title }) {
  let [translateCount, setTranslate] = useState("calc(1200/14.4*1vw)");
  let [checkOpen, setOpen] = useState(false);
  let [count, setCount] = useState(0);
  useEffect(() => {
    if (checkOpen) {
      setTranslate("0vw");
    } else if (!checkOpen) {
      setTranslate("calc(1200/14.4*1vw)");
    }
  }, [checkOpen]);

  if (path === "home") {
    return <></>;
  } else if (path === "products" || path === "company" || path === "keep") {
    return (
      <>
        <button
          className="createBtn borderRadius10"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {title}
        </button>
        <div
          className="createProductProducts"
          style={{
            transform: `translateX(${translateCount})`,
          }}
        >
          <h1>{h1Title}</h1>
          <div className="wrapperProducts gap20 d-flex">
            {inputs?.map((a) => {
              return (
                <label
                  htmlFor={a.inputTitle}
                  className="d-flex d-column a-start"
                >
                  <p>{a.inputTitle}</p>
                  <input
                    type="text"
                    placeholder={a.inputPlaceholder}
                    id={a.inputTitle}
                  />
                </label>
              );
            })}
          </div>
          <div className="functionBtns d-flex a-center gap20 j-end">
            <button
              className="closeBtn borderRadius10"
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              Отмена
            </button>
            <button className="createuBtn borderRadius10">Создать</button>
          </div>
        </div>
      </>
    );
  }
}

export default CreateButton;
