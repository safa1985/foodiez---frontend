import instance from ".";
import { storeToken } from "./storage";

const login = async (userInfo) => {
  const { data } = await instance.post("/users/signin", userInfo);
  if (data.token) {
    storeToken(data.token);
  }
  return data;
};

const register = async (userInfo) => {
  const formData = new FormData();
  for (let key in userInfo) {
    formData.append(key, userInfo[key]);
  }
  const { data } = await instance.post("/api/users/signup", formData);
  console.log(data);
  if (data.token) {
    storeToken(data.token);
  }
  return data;
};

const getProfile = async () => {
  const { data } = await instance.get("/api/users/profile");
  return data;
};

const logout = () => {
  localStorage.removeItem("token");
};

const getRecipe = async () => {
  const { data } = await instance.get(`/Recipe`);
  return data;
};

const getCategories = async () => {
  const { data } = await instance.get(`/Categories`);
  return data;
};

const Updatep = async (userInfo) => {
  const formData = new FormData();

  for (let key in userInfo) {
    formData.append(key, userInfo[key]);
  }
  const { data } = await instance.put(`/profile`, formData);
  return data;
};

export {
  login,
  register,
  getProfile,
  Updatep,
  logout,
  getRecipe,
  getCategories,
};
