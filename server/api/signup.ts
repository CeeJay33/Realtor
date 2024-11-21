import { H3Event, readBody } from "h3";
import fs from "fs/promises";
import path from "path";

interface User {
  username: string;
  email: string;
  password: string;
}

const filePath = path.resolve("server/data/auth.json");

export default defineEventHandler(async (event: H3Event) => {
  try {
    if (event.node.req.method !== "POST") {
      event.node.res.statusCode = 405;
      return { success: false, message: "Only POST requests are allowed." };
    }

    const { username, email, password } = (await readBody(
      event
    )) as Partial<User>;

    if (!username || !email || !password) {
      event.node.res.statusCode = 400;
      return { success: false, message: "All fields are required." };
    }

    const data = await fs.readFile(filePath, "utf-8");
    const users = JSON.parse(data) as User[];

    if (users.some((user) => user.email === email)) {
      event.node.res.statusCode = 409;
      return { success: false, message: "User already exists." };
    }

    const newUser: User = { username, email, password };
    users.push(newUser);
    await fs.writeFile(filePath, JSON.stringify(users, null, 2));

    event.node.res.statusCode = 201;
    return { success: true, message: "User registered successfully." };
  } catch (error) {
    console.error("Error in signup API:", error);
    event.node.res.statusCode = 500;
    return { success: false, message: "Internal server error." };
  }
});
