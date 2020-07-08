import React from "react";
import { observer } from "mobx-react";
import { Header } from "./Components/Header";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { DogListApp } from "./Components/DogListApp";
import "./App.css";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const App = observer(() => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <DogListApp />
    </ThemeProvider>
  );
});

export default App;
