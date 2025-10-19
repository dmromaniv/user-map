interface FooterProps {
  totalUsers?: number;
  totalInterests?: number;
}
const Footer = ({ totalUsers = 10000, totalInterests = 44 }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-3 py-5 ">
      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-100 max-w-7xl mx-auto">
        <p>&copy; {currentYear} User Finder. Discover connections worldwide.</p>

        <div className="flex gap-x-10 items-center">
          {totalUsers && (
            <p>
              Total Users:
              <span className="font-medium pl-1 text-black dark:text-gray-400">
                {totalUsers}
              </span>
            </p>
          )}
          {totalInterests && (
            <p>
              Interests:
              <span className="font-medium pl-1 text-black dark:text-gray-400">
                {totalInterests}
              </span>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
