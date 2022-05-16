import { forwardRef, ForwardRefRenderFunction } from "react";
import { LayoutButton } from "./styles";

interface ButtonProps {
  type: "submit" | "button";
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, type, onClick, ...rest },
  ref
) => {
  return (
    <LayoutButton type={type} onClick={onClick}>
      {children}
    </LayoutButton>
  );
};

export const Button = forwardRef(ButtonBase);
