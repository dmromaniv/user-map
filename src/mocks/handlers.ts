import { http, HttpResponse } from "msw";
import seed from "./data/users.json";

import { GET_USERS_URL } from "../services/config";

import type { User } from "../types/user";

export const handlers = [
  http.get(GET_USERS_URL, () => {
    const items = seed as User[];
    return HttpResponse.json({ items });
  }),
];
