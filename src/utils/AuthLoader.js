// utils/AuthLoader.js
import { RequireAuth } from "./RequireAuth";

export async function requireAuthLoader() {
  try {
    await RequireAuth();
  } catch (error) {
    // Handle the redirection here (e.g., navigate to the login page)
    console.log(error);
  }
}
