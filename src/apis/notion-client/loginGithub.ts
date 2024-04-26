import axios from 'axios';
import { LINK_TO_SERVER } from 'src/constants';

export const loginGithub = async (data : any) => {
  try {
    const access_token = await axios.post(`${LINK_TO_SERVER}/login/getToken`, data);
    const response = await axios.get(`${LINK_TO_SERVER}/login/getUserData`, {
        headers: {
            Authorization: `Bearer ${access_token.data}`,
        },
    });
    if (typeof localStorage !== "undefined") {
        localStorage.setItem("access_token", access_token.data)
        localStorage.setItem("user_data", JSON.stringify(response.data))
    }

    const info = response.data;
    return info;
  } catch (error) {
    console.error('Error login:', error);
    return null;
  }
}
