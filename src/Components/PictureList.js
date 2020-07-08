import React from "react";
import { observer } from "mobx-react";
import { useMainStore } from "../Stores/hooks";
import { Grid, Paper } from "@material-ui/core";
import { LoadingSpinner } from "./LoadingSpinner";

export const PictureList = observer(() => {
  const { pictures, isPicColumnLoading } = useMainStore();
  return isPicColumnLoading ? (
    <LoadingSpinner />
  ) : (
    <div>
      <Grid container>
        {pictures.map((picture) => (
          <img src={picture} alt="" key={picture} className="pictures" />
        ))}
      </Grid>
    </div>
  );
});
