import { baseAPI } from "../Config/apiService";

export const api = {
  getUsers: () => {
    return baseAPI.get(`/users`);
  },

  getUsersById: (id) => {
    return baseAPI.get(`/users:/id`);
  },
};
