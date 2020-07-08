import React, { useState, useEffect } from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { useMainStore } from "../Stores/hooks";
import { ListColumn } from "./ListColumn";
import { PictureColumn } from "./PictureColumn";
import { Grid } from "@material-ui/core";

export const DogListApp = observer(() => {
  const { setAreBreedNamesLoading, setBreeds, query } = useMainStore();

  useEffect(() => {
    const fetchItems = async () => {
      setAreBreedNamesLoading(true);
      const result = await axios(`https://dog.ceo/api/breeds/list/all`);
      setBreeds(Object.keys(result.data.message));
      setAreBreedNamesLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <ListColumn />
        </Grid>
        <Grid item xs={6}>
          <PictureColumn />
        </Grid>
      </Grid>
    </div>
  );
});
