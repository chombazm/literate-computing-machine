import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:5000/v1'
// });
const api = axios.create({
  // baseURL: 'http://127.0.0.1:3000/api/v1'
  baseURL: 'https://tukuyawallet.info/api/v1/'
});
export const login = (credenetials) =>
  api.post('/auth/login', credenetials).then((res) => res.data);
// export const getUsers = () => api.get('/users').then((res) => res.data);
// export const registerAdmin = (credenetials) =>
//   api.post('/auth/register', credenetials).then((res) => res.data);

// export const adminUploadDocument = (formData) =>
//   api
//     .post('/admin/documents/upload', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     })
//     .then((res) => res.data);

export const getTransactions = () => api.get('/payments/transactions').then((res) => res.data);
