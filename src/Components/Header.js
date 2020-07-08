import React from "react";
import { observer } from "mobx-react";
import { useSessionStore } from "../Stores/hooks";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = observer(() => {
  const classes = useStyles();
  const { toggleMobileMode, isMobileModeOn } = useSessionStore();

  const clickHandler = () => {
    toggleMobileMode();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Dog Breed App
        </Typography>
        <Button
          color={isMobileModeOn ? "secondary" : "inherit"}
          onClick={clickHandler}
        >
          Mobile Mode
        </Button>
      </Toolbar>
    </AppBar>
  );
});
