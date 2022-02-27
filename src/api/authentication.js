import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:5000/v1'
// });
const api = axios.create({
  baseURL: 'http://127.0.0.1:3000/v1'
  // baseURL: 'http://45.79.93.249:5000/v1'
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

// export const getDocuments = () => api.get('/admin/documents').then((res) => res.data);
