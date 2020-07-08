import { MainStore } from "./MainStore/MainStore";
import { SessionStore } from "./SessionStore/SessionStore";
import { useMemo } from "react";

let _mainStore;
export const useMainStore = () => {
  const store = useMemo(() => {
    if (!_mainStore) _mainStore = MainStore.create({});
    return _mainStore;
  }, []);
  return store;
};

let _sessionStore;
export const useSessionStore = () => {
  const store = useMemo(() => {
    if (!_sessionStore) _sessionStore = SessionStore.create({});
    return _sessionStore;
  }, []);
  return store;
};
