import { redirect } from "react-router-dom";
import { useAuth } from "./useAuth";

export function RequireAuth() {
  const { user } = useAuth();

  console.log(user);

  if (!user) {
    throw redirect("/login?message=You must log in first.");
  }
}
