import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASEURL || "http://localhost:5173",
})

export default api;