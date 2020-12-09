
import ApiService from './apiService'

/* GET PAGES */

const _connectData = async (url) => {
  try {
    const response = await ApiService.get(url);
    return response.data;
  } catch (error) {
    const data = error?.response?.data;
    console.error(error);
    console.log(data);
    throw error;
  }
}

export const getBlogPages = async () => {
  // TODO need add pagination
  let _countrer = 1; // ?_page=1
  const url = `/posts?_page=${_countrer}`;

  return await _connectData(url);
};

export const getBlogPage = async (slug) => {
  const url = `/posts/${slug}`;

  return await _connectData(url);
};
