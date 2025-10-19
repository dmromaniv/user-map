import { useEffect } from "react";

import { Layout } from "../features/layout";
import SearchableSelect from "../features/search/components/SearchableSelect";
import MapView from "../features/map/components/MapView";

import { useSelectedInterests } from "../hooks/useSelectedInterests";
import { useUsers } from "../hooks/useUsers";
import { useUserContext } from "../hooks/useUserContext";

const HomePage = () => {
  const { selectedInterests, updateSelectedInterests } = useSelectedInterests();
  const { userList, userInterestsMap: fetchedInterestsMap } = useUsers();
  const { updateUserData, userInterestsMap } = useUserContext();

  useEffect(() => {
    updateUserData(userList, fetchedInterestsMap);
  }, [userList, fetchedInterestsMap, updateUserData]);

  const onSelectInterests = (interests: string[]) => {
    updateSelectedInterests(interests);
  };

  return (
    <Layout>
      <SearchableSelect
        selectedInterests={selectedInterests}
        options={Array.from(userInterestsMap.keys()).map((interest) => ({
          value: interest,
          label: interest.toUpperCase(),
        }))}
        onSelectionChange={onSelectInterests}
      />

      <MapView selectedInterests={selectedInterests} />
    </Layout>
  );
};

export default HomePage;
