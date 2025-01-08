import HomeNavbar from "../componentsAll/homeNavbar";
import "../assets/App.css";
import TopControl from "../componentsAll/topControl";
import TableAll from "../componentsAll/tableAll";
import Edit from "../componentsAll/edit";
import Delete from "../componentsAll/delete";
import Arrow from "../componentsAll/arrow";
function Products() {
  return (
    <div className="padding20 gap20 d-flex h-100vh">
      <HomeNavbar />
      <div className="w-1045 d-flex d-column gap20 h-100">
        <TopControl
          title="Продукты"
          createInfo="Создать продукт"
          path="products"
          inputs={[
            {
              inputTitle: "Имя клиента",
              inputPlaceholder: "Введите имя клиента",
            },
            {
              inputTitle: "Номер телефона клиента",
              inputPlaceholder: "Введите номер клиента",
            },
            {
              inputTitle: "Название продукта",
              inputPlaceholder: "Название продукта",
            },
            {
              inputTitle: "Цена продукта",
              inputPlaceholder: "Введите номер телефона",
            },
            {
              inputTitle: "Цвет продукта",
              inputPlaceholder: "Цвет продукта",
            },
            {
              inputTitle: "Специалисты",
              inputPlaceholder: "Выберите специалиста",
            },
            {
              inputTitle: "Дата подачи заказа",
              inputPlaceholder: "Введите дату начала договора",
            },
            {
              inputTitle: "Дата подачи заказа",
              inputPlaceholder: "Введите дату начала договора",
            },
            {
              inputTitle: "Адрес клиента",
              inputPlaceholder: "Введите адрес клиента",
            },
            {
              inputTitle: "Статус:",
              inputPlaceholder: "Выберите статус",
            },
            {
              inputTitle: "Аванс",
              inputPlaceholder: "Введите сумму аванса",
            },
            {
              inputTitle: "Оставшаяся сумма",
              inputPlaceholder: "Введите оставшуюся сумму",
            },
          ]}
          h1Title="Добавить новый продукт"
        />
        <TableAll
          users={[
            {
              need1: "Jamshid Qodirov",
              need2: "90 428 49 01",
              need3: "Macbook",
              need4: "10 000",
              need5: " ",
              need8: "Usmon,Dilsh...",
              need9: "Active",
              need6: <Edit />,
              need7: <Delete />,
              need10: <Arrow src="arrowRight" />,
            },
          ]}
          columns={[
            {
              title: "Имя клиента",
            },
            {
              title: "Телефон",
            },
            {
              title: "Продукта",
            },
            {
              title: "Цена",
            },
            {
              title: "Адрес клиента ",
            },
            {
              title: "Workers",
            },
            {
              title: "Статус",
            },
            {
              title: " ",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Products;
