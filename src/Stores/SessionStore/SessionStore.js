import { types } from "mobx-state-tree";
import { SESSION_STORE } from "../constants";

export const SessionStore = types
  .model(SESSION_STORE, {
    isMobileModeOn: types.optional(types.boolean, false),
  })
  .volatile((self) => ({}))
  .views((self) => ({}))
  .actions((self) => ({
    toggleMobileMode() {
      self.isMobileModeOn
        ? (self.isMobileModeOn = false)
        : (self.isMobileModeOn = true);
    },
    setMobileMode(value) {
      self.isMobileModeOn = value;
    },
  }));
