import HomePage from "./pages/HomePage";
import { UserProvider } from "./context/UserContext/UserProvider";

export default function App() {
  return (
    <UserProvider userList={[]} userInterestsMap={new Map()}>
      <HomePage />
    </UserProvider>
  );
}
