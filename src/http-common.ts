import axios from "axios";

export default axios.create({
  baseURL: "https://www.abibliadigital.com.br/api",
  headers: {
    "Content-type": "application/json",
    "Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkZyaSBOb3YgMjUgMjAyMiAwMDoxNDo1NiBHTVQrMDAwMC5wcml2QGdtYWlsLmNvbSIsImlhdCI6MTY2OTMzNTI5Nn0.cvLZSFCa4B1zizYBjGNcB5tFogSFbqRlbjk7-DDYrSQ"
  }
});