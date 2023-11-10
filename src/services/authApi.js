import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  //  baseURL: 'https://registry-s9xe.onrender.com/api',
});

export const setAuthHeader = token => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  authInstance.defaults.headers.common.Authorization = '';
};

export const userSignUp = async credentials => {
  const { data: result } = await authInstance.post(
    '/auth/register',
    credentials
  );
  setAuthHeader(result.token);
  return result;
};

export const userLogin = async credentials => {
  const { data: result } = await authInstance.post('/auth/login', credentials);
  setAuthHeader(result.token);
  return result;
};

export const userLogout = async () => {
  const response = await authInstance.post('/auth/logout');
  clearAuthHeader();
  return response;
};

export const userCurrent = async token => {
  setAuthHeader(token);
  const response = await authInstance.get('/auth/current');
  console.log('userCurrent', response);
  return response;
};
