import { useEffect, useState } from "react";

import CustomButton from "../../ui/components/Button";

import MoonIcon from "../../../assets/icons/components/MoonIcon";
import SunIcon from "../../../assets/icons/components/SunIcon";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const handleToggleTheme = () => {
    setDark(!dark);
  };

  return (
    <CustomButton onClick={handleToggleTheme} color="default" variant="link">
      {dark ? (
        <span className="text-yellow-600 hover:text-yellow-500 transition-colors duration-300 ease-in-out">
          <SunIcon />
        </span>
      ) : (
        <span className="text-gray-500 hover:text-gray-600 transition-colors duration-300 ease-in-out">
          <MoonIcon size={20} />
        </span>
      )}
    </CustomButton>
  );
};

export default ThemeToggle;
