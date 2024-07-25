import axios from "axios";

const instance = axios.create({ 
  baseURL:  "https://zendb-backend.onrender.com"
});

export default instance;