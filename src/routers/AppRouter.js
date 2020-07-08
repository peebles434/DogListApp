import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "../Components/Header";
import { DogListApp } from "../Components/DogListApp";
import { ListColumn } from "../Components/ListColumn";
import { PictureColumn } from "../Components/PictureColumn";
import { AboutPage } from "../Components/AboutPage";
import { NotFoundPage } from "../Components/NotFoundPage";

export const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DogListApp} exact={true} />
        <Route path="/about" component={AboutPage} exact={true} />
        <Route path="/mobile" component={ListColumn} exact={true} />
        <Route path="/mobile/pictures" component={PictureColumn} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
