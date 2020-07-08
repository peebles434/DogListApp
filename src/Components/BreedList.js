import React from "react";
import { observer } from "mobx-react";
import { useMainStore } from "../Stores/hooks";
import { LoadingSpinner } from "./LoadingSpinner";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: "auto",
  },
}));

export const BreedList = observer(({ breeds }) => {
  const classes = useStyles();
  const { isLoading, breedClickHandler } = useMainStore();

  const clickHandler = (breed) => (event) => {
    breedClickHandler(breed);
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className={classes.root}>
      <List>
        {breeds.map((breed) => (
          <ListItem button key={breed} onClick={clickHandler(breed)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={breed} />
          </ListItem>
        ))}
      </List>
    </div>
  );
});
