import axios from "axios";

const instance = axios.create({
  baseURL: "/api", // api base url
  withCredentials: true, // ✅ This is critical for cookies to be sent
  validateStatus: () => true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
