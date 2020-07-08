import React from "react";
import { observer } from "mobx-react";
import { useSessionStore } from "./Stores/hooks";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { AppRouter } from "./routers/AppRouter";
import { LightDarkSwitch } from "./Components/LightDarkSwitch";
import "./App.css";

const App = observer(() => {
  const { isDarkMode } = useSessionStore();
  const paletteType = isDarkMode ? "dark" : "light";

  const theme = createMuiTheme({
    palette: {
      type: paletteType,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
      <LightDarkSwitch />
    </ThemeProvider>
  );
});

export default App;
