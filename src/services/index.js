
import ApiService from './apiService'

/* GET PAGES */

export const getBlogPages = async () => {
  // TODO need add pagination
  // let _countrer = 1; // ?_page=1
  const url = `/posts`;

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
