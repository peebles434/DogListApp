import { types } from "mobx-state-tree";
import { MAIN_STORE } from "../constants";

export const MainStore = types
  .model(MAIN_STORE, {
    searchText: types.optional(types.string, ""),
    query: types.optional(types.string, ""),
    isListColumnLoading: types.optional(types.boolean, false),
    isPicColumnLoading: types.optional(types.boolean, false),
    currentBreed: types.optional(types.string, ""),
    pictures: types.optional(types.array(types.string), []),
    breeds: types.optional(types.array(types.string), []),
  })
  .volatile((self) => ({}))
  .views((self) => ({}))
  .actions((self) => ({
    searchHandler(value) {
      self.searchText = value;
      self.query = value;
    },
    breedClickHandler(value) {
      self.currentBreed = value;
    },
    setIsListColumnLoading(value) {
      self.isListColumnLoading = value;
    },
    setIsPicColumnLoading(value) {
      self.isPicColumnLoading = value;
    },
    setPictures(value) {
      self.pictures = value;
    },
    setBreeds(value) {
      self.breeds = value;
    },
  }));
