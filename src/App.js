import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary</h1>
        </header>
        <Dictionary />
        <footer>
          Coded by{" "}
          <a href="https://github.com/martinasalayova/dictionary-app">
            Martina Salayová
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
