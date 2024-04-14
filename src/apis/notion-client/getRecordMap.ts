import axios from 'axios';
import { LINK_TO_SERVER } from 'src/constants';

export const getRecordMap = async (pageId: string) => {
  try {
    const response = await axios.get(`${LINK_TO_SERVER}/gkitem/${pageId}`);
    const recordMap = response.data.detail;
    return recordMap;
  } catch (error) {
    console.error('Error fetching record map:', error);
    return null;
  }
}
