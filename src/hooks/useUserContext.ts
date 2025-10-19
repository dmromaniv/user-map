import { use } from "react";

import { UserContext } from "../context/UserContext/context";

export const useUserContext = () => {
  const context = use(UserContext);

  if (!context) {
    throw new Error("Error: useUserContext must be used within a UserProvider");
  }

  return context;
};
