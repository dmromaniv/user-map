import LocationIcon from "../../../assets/icons/components/LocationIcon";

interface LogoProps {
  iconSize?: number;
}

const Logo = ({ iconSize }: LogoProps) => {
  return (
    <a href="/">
      <LocationIcon size={iconSize} color={"currentColor"} />
    </a>
  );
};

export default Logo;
