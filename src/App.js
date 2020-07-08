import React from "react";
import { observer } from "mobx-react";
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
      <DogListApp />
    </ThemeProvider>
  );
});

export default App;
