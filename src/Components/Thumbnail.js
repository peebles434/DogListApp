import React, { useEffect, useState } from "react";
import axios from "axios";
import { observer } from "mobx-react";

export const Thumbnail = observer((breed) => {
  const [thumbnailPic, setThumbnailPic] = useState("");

  if (breed) {
    const fetchItems = async () => {
      const result = await axios(
        `https://dog.ceo/api/breed/${breed.breed}/images`
      );
      setThumbnailPic(result.data.message[0]);
    };
    fetchItems();
  }

  return (
    <div>
      <img src={thumbnailPic} alt="" className="thumbnail" />
    </div>
  );
});
