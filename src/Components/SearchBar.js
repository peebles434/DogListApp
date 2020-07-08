import React from "react";
import { observer } from "mobx-react";
import { useMainStore } from "../Stores/hooks";

export const SearchBar = observer(() => {
  const { searchHandler } = useMainStore();

  return (
    <div>
      <section className="search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search Breeds"
            onChange={(e) => searchHandler(e.target.value)}
            autoFocus
          />
        </form>
      </section>
    </div>
  );
});
