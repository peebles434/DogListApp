import axios from "axios";

export const findThumbnail = async (breed) => {
  const result = await axios(`https://dog.ceo/api/breed/${breed}/images`);
  if (result) {
    // console.log(result.data.message[0]);
    return result.data.message[0];
  }
};
