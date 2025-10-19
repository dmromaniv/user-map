import { useState, useCallback } from "react";

import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from "../services/localStorage";

import { SELECTED_INTERESTS_KEY } from "../services/config";

export const useSelectedInterests = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>(() => {
    const savedInterests = getItemFromLocalStorage<string[]>(
      SELECTED_INTERESTS_KEY
    );
    return savedInterests || [];
  });

  const updateSelectedInterests = useCallback((interests: string[]) => {
    setSelectedInterests(interests);
    setItemToLocalStorage(SELECTED_INTERESTS_KEY, interests);
  }, []);

  return {
    selectedInterests,
    updateSelectedInterests,
  };
};
