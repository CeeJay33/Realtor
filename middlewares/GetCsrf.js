import axios from "axios";

export async function GetCsrfToken() {
 const ax = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'true'
  }
})

ax.defaults.withCredentials = true

ax.get("sanctum/csrf-cookie").then((response) => {
  console.log(response.data);
});
}
