import { createContext } from "react";

import type { User } from "../../types/user";

interface UserContextType {
  userList: User[];
  userInterestsMap: Map<string, number[]>;
  updateUserData: (
    userList: User[],
    userInterestsMap: Map<string, number[]>
  ) => void;
}

export const UserContext = createContext<UserContextType | null>(null);
