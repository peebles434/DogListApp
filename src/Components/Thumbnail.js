import React from "react";

import { observer } from "mobx-react";
import { Avatar } from "@material-ui/core";

export const Thumbnail = observer((image) => {
  return (
    <div>
      <Avatar src={image.image} alt="" className="thumbnail" />
    </div>
  );
});
