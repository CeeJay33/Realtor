import axios from "axios";

export async function isAuthenticated() {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("tok_val_id");
    console.log("Token from localStorage:", token);

    if (!token) {
      console.log("No token found in localStorage");
      return false;
    }

    // Send the request to check authentication status
    const response = await axios.get(
      "https://backendjaycodes.geoedu360.com/realtor-api/public/api/authStatus", // Removed '/public/'
      {
        withCredentials: true, // Allow sending cookies with the request
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Add token in Authorization header
        },
      }
    );

    console.log("Authentication check response:", response);

    // Check if the response indicates the user is authenticated
    return response.data.authenticated === true;
  } catch (error) {
    // Log error with more context
    console.error(
      "Failed to authenticate user:",
      error.response || error.message || error
    );
    return false;
  }
}
