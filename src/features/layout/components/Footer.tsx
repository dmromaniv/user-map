import { useUserContext } from "../../../hooks/useUserContext";

const Footer = () => {
  const { userList, userInterestsMap } = useUserContext();

  const totalUsersCount = userList.length;
  const totalInterestsCount = userInterestsMap.size;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-3 py-5 ">
      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-100 max-w-7xl mx-auto">
        <p>&copy; {currentYear} User Finder. Discover connections worldwide.</p>

        <div className="flex gap-x-10 items-center">
          {totalUsersCount > 0 && (
            <p>
              Total Users:
              <span className="font-medium pl-1 text-black dark:text-gray-400">
                {totalUsersCount}
              </span>
            </p>
          )}
          {totalInterestsCount > 0 && (
            <p>
              Interests:
              <span className="font-medium pl-1 text-black dark:text-gray-400">
                {totalInterestsCount}
              </span>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
