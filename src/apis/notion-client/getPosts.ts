import axios from 'axios';
import { TPosts } from 'src/types';
import { LINK_TO_SERVER } from 'src/constants';


export const getPosts = async () => {
  try {
    const response = await axios.get(`${LINK_TO_SERVER}/gk`);
    const newData = response.data.gks;

    const data = [
      {
          "date": {
              "start_date": "2024-04-13T17:58:29.311Z"
          },
          "_id": "661ac7c56f5a03e2462cba37",
          "type": [
              "Post"
          ],
          "slug": "87c7c5068ad483822fa8",
          "tags": [
              ""
          ],
          "category": [
              "1",
              " 2"
          ],
          "summary": "",
          "level": "",
          "title": "",
          "status": [
              "Public"
          ],
          "createdTime": "2024-04-13T17:58:29.311Z",
          "fullWidth": false,
          "thumbnail": "https://i.imgur.com/yaw0F68.jpeg",
          "certificate": "",
          "author": [],
          "__v": 0
      }
  ];
    
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
