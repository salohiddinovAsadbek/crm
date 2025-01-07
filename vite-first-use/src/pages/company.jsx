import HomeNavbar from "../componentsAll/homeNavbar";
import "../assets/App.css";
import TopControl from "../componentsAll/topControl";
function Company() {
  return (
    <div className="d-flex gap20 padding20">
      <HomeNavbar />
      <div>
        <TopControl
          title="Фирма"
          createInfo="Создать продукт"
          path="company"
          inputs={[
            {
              inputTitle: "Название фирмы",
              inputPlaceholder: "Название фирмы",
            },
            {
              inputTitle: "Менеджер ФИО",
              inputPlaceholder: "Менеджер ФИО",
            },
            {
              inputTitle: "Номер телефона (Менеджер)",
              inputPlaceholder: "Номер телефона (Менеджер)",
            },
            {
              inputTitle: "Адрес",
              inputPlaceholder: "Адрес",
            },
            {
              inputTitle: "Дата регистрации:",
              inputPlaceholder: "Введите дату регистрации",
            },
          ]}
          h1Title="Создать новую фирму"
        />
      </div>
    </div>
  );
}

export default Company;
