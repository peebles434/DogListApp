import React, { useState } from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { Avatar } from "@material-ui/core";

export const Thumbnail = observer((breed) => {
  const [thumbnailPic, setThumbnailPic] = useState("");

  return (
    <div>
      <Avatar src={thumbnailPic} alt="" className="thumbnail" />
    </div>
  );
});
