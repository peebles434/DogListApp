import { types } from "mobx-state-tree";
import { MAIN_STORE } from "../constants";

export const GameStore = types
  .model(MAIN_STORE, {})
  .volatile((self) => ({}))
  .views((self) => ({}))
  .actions((self) => ({}));
