import cookie from "react-cookies";
import { setToken, removeToken } from "@utils/tokenManager";
import axios from "axios";

const login = async (request) => {
  const res = await axios.post(`${process.env.HOST}/auth/login`, request);
  setToken(res.data.value);
  return res.data;
};

const reissue = async () => {
  const accessToken = await cookie.load("re1mAccessToken");
  const refreshToken = await cookie.load("re1mRefreshToken");
  const res = await axios.post(`${process.env.HOST}/auth/reissue`, {
    accessToken: accessToken,
    refreshToken: refreshToken,
  });
  setToken(res.data.value);
  return res;
};

const logout = async () => {
  const accessToken = await cookie.load("re1mAccessToken");
  const refreshToken = await cookie.load("re1mRefreshToken");
  try {
    await axios.post(`${process.env.HOST}/auth/logout`, {
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
    const result = await removeToken();
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { login, reissue, logout };