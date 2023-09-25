import axios from "axios";

export const fetchUserInfo = async ( emailOrUsername ) => {
  try {
    const response = await axios.get("http://192.168.18.191:5005/api/v1/data/jamaah", {
      params: { username: emailOrUsername },
    });
    return response.data.data;
  } catch (error) {
    console.log("error fetching user", error);
    return null;
  }
};
