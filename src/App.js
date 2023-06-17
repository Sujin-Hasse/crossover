import logo from "./logo.svg";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
