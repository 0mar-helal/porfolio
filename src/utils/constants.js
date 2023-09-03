import axios from "axios";

export const BASE_API_LINK= "https://0marhelal.pythonanywhere.com";

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_API_LINK}/${url}`);
    return data;
};