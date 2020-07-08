import React from "react";
import { observer } from "mobx-react";
import { SearchBar } from "./SearchBar";
import { BreedList } from "./BreedList";
import { Paper } from "@material-ui/core";

export const ListColumn = observer(() => {
  return (
    <div>
      <Paper className="columns">
        <SearchBar />
        <BreedList />
      </Paper>
    </div>
  );
});
