import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <div>
          <Dictionary defaultKeyword="skincare" />
        </div>
        <footer className="Footer">
          This project is coded by{" "}
          <a href="https://www.linkedin.com/in/eva-groenendijk-22144180/">
            Eva Groenendijk
          </a>{" "}
          and is{" "}
          <a href="https://github.com/egroenendijk/shecodes-react-dictionary-project-2">
            open-sourced on GitGub{" "}
          </a>
          and{" "}
          <a href="https://elegant-franklin-f0ae62.netlify.app/">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
