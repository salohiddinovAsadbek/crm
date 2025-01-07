import HomeNavbar from "../componentsAll/homeNavbar";
import "../assets/App.css";
import TopControl from "../componentsAll/topControl";
function Products() {
  return (
    <div className="padding20 gap20 d-flex">
      <HomeNavbar />
      <div className="w-1045">
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
      </div>
    </div>
  );
}

export default Products;
