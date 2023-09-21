import axios from "axios";

export const updateCheckpoint = async (emailOrUsername, numCheckpoint, ritualName) => {
    const datetime = new Date()
  try {
    const response = await axios.post(`http://192.168.18.191:5005/api/v1/checkpoint/${numCheckpoint}`,{
        "username": emailOrUsername,
        "startDate": datetime.toJSON(),
        "ritualname": ritualName 
    })
    return response.data
  } catch (error) {
    console.log("error sending checkpoint", error);
    return null;
  }
};
