import Logo from "../../ui/components/Logo";

import { APP_DESCRIPTION, APP_VISIBLE_NAME } from "../../../config/base";

const Header = () => {
  return (
    <header className="flex items-center space-between px-3 py-5 bg-white border-b border-gray-100">
      <div className="flex items-center gap-3">
        <Logo />
        <div>
          <p className="font-medium">{APP_VISIBLE_NAME}</p>
          <p className="text-xs text-gray-400">{APP_DESCRIPTION}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
