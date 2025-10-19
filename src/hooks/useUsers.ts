import { useEffect, useMemo, useState } from "react";

import { fetchUsers } from "../services/api";
import { buildUserInterestsMap } from "../features/map/utils/clustering";

import type { User } from "../types/user";

export const useUsers = () => {
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers()
      .then(setUserList)
      .catch((error) => console.error("Failed to fetch users:", error));
  }, []);

  const userInterestsMap = useMemo(
    () => buildUserInterestsMap(userList),
    [userList]
  );

  return { userList, userInterestsMap };
};
