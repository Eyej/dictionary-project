import Dictionary from "./Dictionary";
import logo from "./my-logo.png"; //added my own logo
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="cake" />
        </main>
        <footer className="App-footer">
          {" "}
          <small>
            By Ijeoma Onyenokporo, open source code on{" "}
            <a href="https://github.com/Eyej/dictionary-project">Github</a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
