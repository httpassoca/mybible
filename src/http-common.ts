import axios from "axios";

export default axios.create({
  baseURL: "https://www.abibliadigital.com.br/api",
  headers: {
    "Content-type": "application/json"
  }
});