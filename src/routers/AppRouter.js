import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ListColumn } from "../Components/ListColumn";
import { PictureColumn } from "../Components/PictureColumn";

export const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={ListColumn} exact={true} />
        <Route path="/pictures" component={PictureColumn} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);
