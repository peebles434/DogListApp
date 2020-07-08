import React, { useState, useEffect } from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { useMainStore } from "../Stores/hooks";
import { Header } from "./Header";
import { ListColumn } from "./ListColumn";
import { PictureColumn } from "./PictureColumn";
import { Grid } from "@material-ui/core";

export const DogListApp = observer(() => {
  const { setIsListColumnLoading, query, breeds, setBreeds } = useMainStore();

  useEffect(() => {
    const fetchItems = async () => {
      setIsListColumnLoading(true);
      const breedsResult = await axios(
        `https://dog.ceo/api/breeds/list/all?=${query}`
      );
      setBreeds(Object.keys(breedsResult.data.message));
      setIsListColumnLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div>
      <Header />
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
