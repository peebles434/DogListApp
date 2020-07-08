import React from "react";
import { observer } from "mobx-react";
import { useMainStore } from "../Stores/hooks";
import { LoadingSpinner } from "./LoadingSpinner";
import { Thumbnail } from "./Thumbnail";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    margin: "auto",
  },
}));

export const BreedList = observer(() => {
  const classes = useStyles();
  const { isLoading, breedClickHandler, allBreeds } = useMainStore();

  const clickHandler = (breed) => (event) => {
    breedClickHandler(breed);
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className={classes.root}>
      <List>
        {allBreeds.map((breed) => (
          <ListItem button key={breed} onClick={clickHandler(breed)}>
            <ListItemIcon>
              <Thumbnail breed={breed} />
            </ListItemIcon>
            <h1>{breed}</h1>
          </ListItem>
        ))}
      </List>
    </div>
  );
});
