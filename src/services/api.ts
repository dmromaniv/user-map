import { GET_USERS_URL } from "./config";

import type { User } from "../types/user";

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch(GET_USERS_URL);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = (await res.json()) as { items: User[] };
  return data.items;
};
