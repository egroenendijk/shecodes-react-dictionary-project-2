import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <br />
        <div>
          <Dictionary />
        </div>
        <br />
        <footer className="Footer">Coded by Eva Groenendijk</footer>
      </div>
    </div>
  );
}

export default App;
