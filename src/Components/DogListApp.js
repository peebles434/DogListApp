import React from "react";
import { observer } from "mobx-react";
import { Header } from "./Header";
import { ListColumn } from "./ListColumn";
import { PictureColumn } from "./PictureColumn";
import { Grid } from "@material-ui/core";

export const DogListApp = observer(() => {
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
