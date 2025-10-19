import { Layout } from "../features/layout";
import SearchableSelect from "../features/search/components/SearchableSelect";
import MapView from "../features/map/components/MapView";

import { useUsers } from "../hooks/useUsers";
import { useSelectedInterests } from "../hooks/useSelectedInterests";

const HomePage = () => {
  const { selectedInterests, updateSelectedInterests } = useSelectedInterests();
  const { userList, userInterestsMap } = useUsers();

  const onSelectInterests = (interests: string[]) => {
    updateSelectedInterests(interests);
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
