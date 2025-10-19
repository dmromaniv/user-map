import { useState } from "react";

import { Layout } from "../features/layout";

import SearchableSelect from "../features/search/components/SearchableSelect";
import MapView from "../features/map/components/MapView";

import { useUsers } from "../hooks/useUsers";

const HomePage = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const { userList, userInterestsMap } = useUsers();

  const onSelectInterests = (interests: string[]) => {
    setSelectedInterests(interests);
  };

  return (
    <Layout>
      <SearchableSelect
        selectedInterests={selectedInterests}
        options={Array.from(userInterestsMap.keys()).map((interest) => ({
          value: interest,
          label: interest,
        }))}
        onSelectionChange={onSelectInterests}
      />

      <MapView
        selectedInterests={selectedInterests}
        interestsMap={userInterestsMap}
        userList={userList}
      />
    </Layout>
  );
};

export default HomePage;
