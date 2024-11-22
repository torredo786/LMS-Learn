import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(sessionStorage.getItem("accessToken")) || '';
    console.log("accessToken",accessToken)
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`; // this why we need to access [1]
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default axiosInstance;
