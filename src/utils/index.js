import { get } from 'axios';

export const getData = async (url, params) => {
  try {
    const { data } = await get(url, { params });
    return { data };
  } catch (error) {
    return { error };
  }
};
