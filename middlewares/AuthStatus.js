import axios from "axios";

export async function isAuthenticated() {
  try {
    const token = localStorage.getItem("tok_val_id");
    console.log("Token from localStorage:", token);

    if (!token) {
      console.log("No token found in localStorage");
      return false;
    }

    const response = await axios.get("http://127.0.0.1:8000/api/authStatus", {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Authentication check response:", response);

    return response.data.authenticated === true; // Check if the response indicates the user is authenticated
  } catch (error) {
    // Log error with more context
    console.error(
      "Failed to authenticate user:",
      error.response || error.message || error
    );
    return false;
  }
}
