import axios from "axios";

export async function isAuthenticated() {
  try {
    const token = localStorage.getItem("tok_val_id")
    console.log(token);

    const response = await axios.get(
      "http://localhost:8000/api/authStatus",
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
      
      console.log(response)

    return response.data.authenticated === true;
  } catch (error) {
    console.log("Failed to authenticate user:", error);
    return false;
  }
}
