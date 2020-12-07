import axios from 'axios';

const config = {
  baseURL: process.env.REACT_APP_API_URL
};

export const ApiService = axios.create(config);

/* GET PAGES */

export const getBlogPages = async () => {
  const url = `/posts/`;
  
  try {
    const response = await ApiService.get(url);
    return response.data;
  } catch (error) {
    const data = error?.response?.data;
    console.error(error);
    console.log(data);
    throw error;
  }
};
