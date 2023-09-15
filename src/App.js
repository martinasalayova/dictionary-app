import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <a href="/" rel="noreferer">
            <h1>Dictionary 📖</h1>
          </a>
        </header>
        <Dictionary />
      </div>
      <footer>
        Coded by{" "}
        <a
          href="https://github.com/martinasalayova/dictionary-app"
          rel="noreferer"
        >
          Martina Salayová
        </a>
      </footer>
    </div>
  );
}

export default App;
