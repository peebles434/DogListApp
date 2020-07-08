import React, { useEffect, useState } from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { useMainStore } from "../Stores/hooks";
import { Paper, Grid } from "@material-ui/core";

export const PictureColumn = observer(() => {
  const {
    currentBreed,
    setIsPicColumnLoading,
    pictures,
    setPictures,
  } = useMainStore();

  useEffect(() => {
    const fetchItems = async () => {
      setIsPicColumnLoading(true);
      const result = await axios(
        `https://dog.ceo/api/breed/${currentBreed}/images`
      );
      setPictures(result.data.message);
      setIsPicColumnLoading(false);
    };
    fetchItems();
  }, [currentBreed]);

  return (
    <div>
      <Paper className="columns">
        <Grid container>
          {pictures.map((picture) => (
            <img src={picture} alt="" key={picture} className="pictures" />
          ))}
        </Grid>
      </Paper>
    </div>
  );
});
