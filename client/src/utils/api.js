import axios from "axios";

// Create an Axios instance with default config
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1",
    withCredentials: true, // Important for cookies
});

// Response interceptor for global error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        const message = error.response?.data?.message || error.message || "Something went wrong";
        // You can use toast here if needed, but usually better to handle in UI or Query onError
        return Promise.reject({ ...error, message });
    }
);

export default api;
