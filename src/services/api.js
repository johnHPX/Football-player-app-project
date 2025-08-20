import axios from "axios";

const api = axios.create({
  baseURL: "https://www.thesportsdb.com/api/v1/json/3/searchplayers.php", // sua API
  timeout: 5000,
});

export default api;