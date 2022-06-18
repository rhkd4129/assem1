import { getToken } from "@utils/tokenManager";
const isLoggedIn = async () => {
  const token = await getToken();
  if (token) {
    // authorized
    return true;
  }

  // not authorized
  return false;
};

export default isLoggedIn;