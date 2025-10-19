import LocationIcon from "../../../assets/icons/components/LocationIcon";

interface LogoProps {
  iconSize?: number;
}

const Logo = ({ iconSize }: LogoProps) => {
  return (
    <a href="/">
      <span className="text-black dark:text-gray-400 hover:dark:text-teal-800 transition-colors duration-300 ease-in-out">
        <LocationIcon size={iconSize} color="currentColor" />
      </span>
    </a>
  );
};

export default Logo;
