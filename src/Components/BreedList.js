import React from "react";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";
import { useMainStore } from "../Stores/hooks";
import { useSessionStore } from "../Stores/hooks";
import { LoadingSpinner } from "./LoadingSpinner";
import { Thumbnail } from "./Thumbnail";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

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
  const history = useHistory();
  const {
    areBreedNamesLoading,
    breedClickHandler,
    filteredBreeds,
  } = useMainStore();

  const { isMobileModeOn } = useSessionStore();

  const clickHandler = (breed) => (event) => {
    breedClickHandler(breed);
    if (isMobileModeOn) {
      history.push("/mobile/pictures");
    }
  };

  const capitalizedBreeds = (breed) => {
    return breed.charAt(0).toUpperCase() + breed.slice(1);
  };

  return areBreedNamesLoading ? (
    <LoadingSpinner />
  ) : (
    <div className={classes.root}>
      <List>
        {filteredBreeds.map((breed) => (
          <ListItem button key={breed} onClick={clickHandler(breed)}>
            <ListItemIcon>
              <Thumbnail breed={breed} />
            </ListItemIcon>
            <h1>{capitalizedBreeds(breed)}</h1>
          </ListItem>
        ))}
      </List>
    </div>
  );
});
