import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/v1'
});

// import axios from 'axios';

// export const baseURL = 'http://localhost:5000/v1';

// export const instance = axios.create({
//   baseURL,
//   timeout: 1000,
//   headers: { 'X-Authentication-Header': 'foobar' }
// });