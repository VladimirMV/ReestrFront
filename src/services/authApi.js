import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
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
  console.log('login:servise===================', result);
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
  return response;
};

// Данный код экспортирует объект authInstance, который создается из библиотеки axios с
// базовым URL для отправки запросов для аутентификации пользователей.Также экспортируются
// несколько функций: setAuthHeader, clearAuthHeader, userSignUp, userLogin, userLogout, userCurrent.

// setAuthHeader и clearAuthHeader позволяют добавить или удалить заголовок авторизации для
// запросов, отправленных с помощью authInstance.

//   userSignUp, userLogin, userLogout и userCurrent используют методы axios, чтобы выполнить
// соответствующие запросы в соответствии с API для аутентификации пользователей.

// Функция userCurrent позволяет получить информацию о текущем пользователе, основываясь на переданном ей токене.
