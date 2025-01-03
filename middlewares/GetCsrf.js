import axios from "axios";

export async function GetCsrfToken() {
 const ax = axios.create({
   baseURL: "https://backendjaycodes.geoedu360.com/realtor-api/public/",
   headers: {
     Accept: "application/json",
     "Content-Type": "application/json",
     "Access-Control-Allow-Origin": "true",
   },
 });

ax.defaults.withCredentials = true

ax.get("sanctum/csrf-cookie").then((response) => {
  console.log(response.data);
});
}
