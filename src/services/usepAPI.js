import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://6443a39d90738aa7c074a62b.mockapi.io/',
//   params: {},
// });

axios.defaults.baseURL = 'https://6443a39d90738aa7c074a62b.mockapi.io/';

export const getUsers = async (page, limit = 3) => {
  try {
    const resp = await axios.get(`/users?page=${page}&limit=${limit}`);
    const data = resp.data;
    console.log(resp);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updUser = async (userId, userFollowers) => {
  try {
    const resp = await axios.put(`/users/${userId}`, {
      followers: userFollowers,
    });
    const data = resp.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
