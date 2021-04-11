import axios from "axios";

export const sendEmail = async (data) => {
  try {
    const { status } = await axios.post("api/enquiry", data);
    return status;
  } catch (error) {
    return error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
  }
};
