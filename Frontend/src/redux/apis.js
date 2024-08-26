import axios from "axios";

export const baseURL = "http://localhost:3030/api";

const API = axios.create({ baseURL: baseURL });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers["Auuthorization"] = `Bearer ${localStorage.getItem("token")}`;
  }

  return req;
});

export const registerUser = (userData) => {
  API.post("/auth/register", userData);
};

export const listAllNotes = () => API.get("/user/notes");
