import { API } from '../config';
const axios = require('axios').create({
  baseURL: `${API}/api`,
  timeout: 10000,
});

export const onGetData = async (url: string) => {
  try {
    const response = await axios.get(url, {
      headers: {
        Accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};
