import HomeNavbar from "../componentsAll/homeNavbar";
import "../assets/App.css";
import TopControl from "../componentsAll/topControl";
import TableAll from "../componentsAll/tableAll";
import Edit from "../componentsAll/edit";
import Delete from "../componentsAll/delete";
import Arrow from "../componentsAll/arrow";
function Company() {
  return (
    <div className="d-flex gap20 padding20">
      <HomeNavbar />
      <div className="w-1045 d-flex d-column gap20">
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
        <TableAll
          users={[
            {
              need1: "Fil boya",
              need2: "Jamshid Qodirov",
              need3: "90 428 49 01",
              need4: "Toshkent",
              need5: "Active",
              need8: "",
              need6: <Edit />,
              need7: <Delete />,
              need10: <Arrow src="arrowDown" />,
            },
          ]}
          columns={[
            {
              title: "Название фирма",
            },
            {
              title: "Менеджер ФИО",
            },
            {
              title: "Номер телефона",
            },
            {
              title: "Адрес",
            },
            {
              title: "Статус",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Company;
