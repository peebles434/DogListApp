import { MainStore } from "./MainStore/MainStore";
import { useMemo } from "react";

let _mainStore;
export const useMainStore = () => {
  const store = useMemo(() => {
    if (!_mainStore) _mainStore = MainStore.create({});
    return _mainStore;
  }, []);
  return store;
};
