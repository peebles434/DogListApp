import React from "react";
import { observer } from "mobx-react";
import { Header } from "./Components/Header";
import { MobileDogListApp } from "./Components/MobileDogListApp";
import { useSessionStore } from "./Stores/hooks";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { DogListApp } from "./Components/DogListApp";
import "./App.css";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const App = observer(() => {
  const { isMobileModeOn } = useSessionStore();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      {isMobileModeOn ? <MobileDogListApp /> : <DogListApp />}
    </ThemeProvider>
  );
});

export default App;
