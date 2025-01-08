import "../assets/App.css";
import Img from "./img";
import "../assets/delete.css";
function Delete() {
  return (
    <button className="deleteBtn d-flex a-center j-center">
      <Img src="delete" />
    </button>
  );
}

export default Delete;
