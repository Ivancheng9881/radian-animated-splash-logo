import "./App.css";
import logo1 from "./assets/logo1.svg";
import logo2 from "./assets/logo-triangle_Bottom.svg";
import logo3 from "./assets/logo-triangle_top.svg";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <img className="logo1" src={logo1} alt="logo1" />
        <img className="logo2" src={logo2} alt="logo2" />
        <img className="logo3" src={logo3} alt="logo3" />
      </div>
    </div>
  );
}

export default App;
