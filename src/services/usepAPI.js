import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6443a39d90738aa7c074a62b.mockapi.io/',
  params: {},
});

export const getUsers = async (page = 1, limit = 3) => {
  try {
    const resp = await instance.get(`/users?page=${page}&limit=${limit}`);
    const data = resp.data;
    console.log(resp);
    return data;
  } catch (error) {
    console.log(error);
  }
};
