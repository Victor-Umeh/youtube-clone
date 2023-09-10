import axios from "axios";

// console.log(process.env.NODE_ENV);
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Key": "d6798e8edfmsh4b2a18d5e3adc6dp181e5ejsn5a5ab020b7e7",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
