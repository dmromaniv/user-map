import { Button, type ButtonProps } from "antd";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const CustomButton = ({ children, ...buttonProps }: CustomButtonProps) => {
  return <Button {...buttonProps}>{children}</Button>;
};

export default CustomButton;
