import React, { useEffect, useState } from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { useMainStore } from "../Stores/hooks";
import { PictureList } from "./PictureList";
import { Paper, Grid } from "@material-ui/core";

export const PictureColumn = observer(() => {
  const { currentBreed, setIsPicColumnLoading, setPictures } = useMainStore();

  useEffect(() => {
    const fetchItems = async () => {
      if (currentBreed.length > 0) {
        setIsPicColumnLoading(true);
      }
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
        <PictureList />
      </Paper>
    </div>
  );
});
