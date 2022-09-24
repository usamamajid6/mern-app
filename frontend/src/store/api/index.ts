import axios from "axios";

const api = axios.create({
  baseURL: "/",
  headers: {
    "Content-Type": "application/json",
  },
});
// api.interceptors.request.use(
//   (config: any) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] = `Token ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
export default api;
