import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNav
        logo="EpiBooks"
        href="https://www.google.it/?hl=it"
        HrefName="Home"
        href2="https://www.youtube.com/"
        HrefName2="About"
        href3="https://www.npmjs.com/"
        HrefName3="Browser"
      />

      <Welcome descriptionAlert="Benvenuti nella nostra Libreria" />

      <AllTheBooks />

      <MyFooter />
    </div>
  );
}

export default App;
