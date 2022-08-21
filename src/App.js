import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import "./App.css";

import ProductCard from "./components/ProductCard";

const theme = {
  darkCyan: "hsl(158, 36%, 37%)",
  superDarkCyan: "hsl(158, 36%, 23%)",
  cream: "hsl(30, 38%, 92%)",
  veryDarkBlue: "hsl(212, 21%, 14%)",
  darkGrayishBlue: "hsl(228, 12%, 48%)",
  white: "hsl(0, 0%, 100%)",
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ProductCard />
      </ThemeProvider>
    </div>
  );
}

export default App;
