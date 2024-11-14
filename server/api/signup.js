import fs from "fs";
import path from "path";

// Path to the auth.json file
const filePath = path.resolve("auth.json");

// Helper function to read JSON data
const readUserData = () => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading auth.json:", error);
    return [];
  }
};

// Helper function to write JSON data
const writeUserData = (data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing to auth.json:", error);
  }
};

// Define the API route for signing up
export default defineEventHandler(async (event) => {
  // Parse the request body
  const { username, password, email } = await useBody(event);

  // Basic validation
  if (!username || !password || !email) {
    return { success: false, message: "Username and password are required" };
  }

  // Read existing users from auth.json
  const users = readUserData();

  // Check if the user already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return { success: false, message: "Username already exists" };
  }

  // Add the new user
  const newUser = { username, email, password }; 
  users.push(newUser);
  writeUserData(users);

  return { success: true, message: "User registered successfully" };
});
