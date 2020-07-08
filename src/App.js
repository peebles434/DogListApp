import React from "react";
import { observer } from "mobx-react";
import { useSessionStore } from "./Stores/hooks";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { AppRouter } from "./routers/AppRouter";
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
      <AppRouter />
    </ThemeProvider>
  );
});

export default App;
