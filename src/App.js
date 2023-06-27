import "./App.css";
import GlobalStyle from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import { IdInput, Header } from "./components/Common";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <IdInput />
      <Header />
    </ThemeProvider>
  );
}

export default App;
