import axios from "axios";
import { LINK_TO_SERVER } from "src/constants";

export const postPost = async (title: string, tags: string, category: string[], level: string, certificate: string, summary: string, thumbnail: string) => {
  const body = {
    title,
    tags,
    category,
    level,
    certificate,
    summary,
    thumbnail
  };
  
  try {
    const response = await axios.post(`${LINK_TO_SERVER}/gk`, body);
    const {slug} = response.data;
    return slug
  } catch (error) {
    console.error(error);
  }
}
