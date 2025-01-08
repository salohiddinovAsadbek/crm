import Img from "./img";
import "../assets/edit.css";
import "../assets/App.css";
function Arrow({ src }) {
  return (
    <button className="arrowBtn d-flex j-center a-center">
      <Img src={src} />
    </button>
  );
}

export default Arrow;
