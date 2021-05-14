import Dictionary from "./Dictionary";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          {" "}
          <small>
            Built by Ijeoma Onyenokporo, open source code on{" "}
            <a href="https://github.com/Eyej/dictionary-project">Github</a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
