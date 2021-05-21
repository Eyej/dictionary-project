import Dictionary from "./Dictionary";
import logo from "./my-logo.png"; //added my logo
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
            Built by{" "}
            <a
              href="https://www.linkedin.com/in/ijeoma-onyenokporo/"
              target="_blank"
              rel="noreferrer"
            >
              Ijeoma Onyenokporo
            </a>
            , this project is available on{" "}
            <a
              href="https://github.com/Eyej/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and is hosted on{" "}
            <a
              href="https://zen-snyder-f5ff2c.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
