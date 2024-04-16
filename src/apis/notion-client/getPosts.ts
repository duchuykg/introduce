import axios from 'axios';
import { TPosts } from 'src/types';
import { LINK_TO_SERVER } from 'src/constants';


export const getPosts = async () => {
  try {
    const response = await axios.get(`${LINK_TO_SERVER}/gk`);
    const newData = response.data.gks;

    const data = [{
      date: {
          start_date: "2022-06-09"
      },
      _id: "661ac7c56f5a03e2462cba37",
      type: [
          "Post"
      ],
      slug: 'about',
      tags: [
          ""
        ],
        category: [
            "",
        ],
        summary: "",
        level: "",
        title: "",
        status: [
            "Public"
        ],
        createdTime: "Sat Sep 02 2023 07:57:04 GMT+0700 (Indochina Time)",
        fullWidth: false,
        thumbnail: "",
        certificate: "",
        author: [],
    }];
    
    const mergedData = [...data, ...newData];

    // Sort by date
    mergedData.sort((a: any, b: any) => {
      const dateA: any = new Date(a?.date?.start_date || a.createdTime);
      const dateB: any = new Date(b?.date?.start_date || b.createdTime);
      return dateB - dateA;
    });

    const posts = mergedData as TPosts;
    return posts;
    
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
  
}
