import React, { useState } from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { Avatar } from "@material-ui/core";

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
      <Avatar src={thumbnailPic} alt="" className="thumbnail" />
    </div>
  );
});
