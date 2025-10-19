import { useState } from "react";

import { UserContext } from "./context";

import type { User } from "../../types/user";

interface UserProviderProps {
  children: React.ReactNode;
  userList: User[];
  userInterestsMap: Map<string, number[]>;
}

export const UserProvider = ({
  children,
  userList: initialUserList,
  userInterestsMap: initialInterestsMap,
}: UserProviderProps) => {
  const [userList, setUserList] = useState(initialUserList);
  const [userInterestsMap, setUserInterestsMap] = useState(initialInterestsMap);

  const updateUserData = (
    newUserList: User[],
    newUserInterestsMap: Map<string, number[]>
  ) => {
    setUserList(newUserList);
    setUserInterestsMap(newUserInterestsMap);
  };

  return (
    <UserContext.Provider
      value={{ userList, userInterestsMap, updateUserData }}
    >
      {children}
    </UserContext.Provider>
  );
};
