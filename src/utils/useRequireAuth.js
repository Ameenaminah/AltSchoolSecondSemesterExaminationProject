import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function useRequireAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    const requireAuth = () => {
      const user = localStorage.getItem("user");
      if (!user) {
        navigate("/login", {
          state: { message: "Please log in to access this page" },
        });
      }
    };

    requireAuth();
  }, [navigate]);

  return null;
}
