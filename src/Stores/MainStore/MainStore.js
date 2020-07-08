import { types } from "mobx-state-tree";
import { MAIN_STORE } from "../constants";
import { BreedModel } from "../../Models/BreedModel/BreedModel";
import { findThumbnail } from "../../Logic/findThumbNail";

export const MainStore = types
  .model(MAIN_STORE, {
    searchText: types.optional(types.string, ""),
    areBreedNamesLoading: types.optional(types.boolean, true),
    isPicColumnLoading: types.optional(types.boolean, false),
    currentBreed: types.optional(types.string, ""),
    pictures: types.optional(types.array(types.string), []),
    allBreeds: types.array(BreedModel),
  })
  .volatile((self) => ({}))
  .views((self) => ({
    get filteredBreeds() {
      if (self.searchText.length > 0) {
        return self.allBreeds.filter((breed) =>
          breed.name.includes(self.searchText.toLowerCase())
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
    setBreeds(values) {
      if (values) {
        for (let i = 0; i < values.length; i++) {
          self.allBreeds.push({
            name: values[i],
            image: findThumbnail(values[i]),
          });
        }
      }
    },
  }));
