import React from "react";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";
import { useMainStore } from "../Stores/hooks";
import { useSessionStore } from "../Stores/hooks";
import { Grid, Button } from "@material-ui/core";
import { LoadingSpinner } from "./LoadingSpinner";

export const PictureList = observer(() => {
  const history = useHistory();
  const { pictures, isPicColumnLoading } = useMainStore();
  const { isMobileModeOn } = useSessionStore();

  const clickHandler = () => {
    history.push("/mobile");
  };

  return isPicColumnLoading ? (
    <div className="picSpinner">
      <LoadingSpinner />
    </div>
  ) : (
    <div>
      {isMobileModeOn ? (
        <div className="mobileBackButton">
          <Button onClick={clickHandler} variant="contained">
            Return to List
          </Button>
        </div>
      ) : null}
      <Grid container>
        <div className="picContainer">
          {pictures.map((picture) => (
            <img src={picture} alt="" key={picture} className="pictures" />
          ))}
        </div>
      </Grid>
    </div>
  );
});
