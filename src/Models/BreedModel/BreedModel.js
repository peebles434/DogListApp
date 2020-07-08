import { types } from "mobx-state-tree";
import { BREED_MODEL } from "../constants";

export const BreedModel = types
  .model(BREED_MODEL, {
    name: types.string,
    image: types.string,
  })
  .volatile((self) => ({}))
  .views((self) => ({}))
  .actions((self) => ({}));
