import Logo from "../../ui/components/Logo";
import ThemeToggle from "../../theme/components/ThemeToggle";

import { APP_DESCRIPTION, APP_VISIBLE_NAME } from "../../../config/base";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-3 py-5  border-b border-gray-100 dark:border-teal-900">
      <div className="flex items-center gap-3">
        <Logo />
        <div>
          <p className="font-medium dark:text-gray-100">{APP_VISIBLE_NAME}</p>
          <p className="text-xs text-gray-400">{APP_DESCRIPTION}</p>
        </div>
      </div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
