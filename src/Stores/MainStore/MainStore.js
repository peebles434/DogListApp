import { types } from "mobx-state-tree";
import { MAIN_STORE } from "../constants";

export const MainStore = types
  .model(MAIN_STORE, {
    searchText: types.optional(types.string, ""),
    areBreedNamesLoading: types.optional(types.boolean, true),
    isPicColumnLoading: types.optional(types.boolean, false),
    currentBreed: types.optional(types.string, ""),
    pictures: types.optional(types.array(types.string), []),
    allBreeds: types.optional(types.array(types.string), []),
  })
  .volatile((self) => ({}))
  .views((self) => ({
    get filteredBreeds() {
      if (self.searchText.length > 0) {
        return self.allBreeds.filter((breed) =>
          breed.includes(self.searchText.toLowerCase())
        );
      } else {
        return self.allBreeds;
      }
    },
  }))
  .actions((self) => ({
    searchHandler(value) {
      self.searchText = value;
    },
    breedClickHandler(value) {
      self.currentBreed = value;
    },
    setAreBreedNamesLoading(value) {
      self.areBreedNamesLoading = value;
    },
    setIsPicColumnLoading(value) {
      self.isPicColumnLoading = value;
    },
    setPictures(value) {
      self.pictures = value;
    },
    setBreeds(value) {
      self.allBreeds = value;
    },
  }));
