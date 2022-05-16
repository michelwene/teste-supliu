import { InputError } from "components/InputError";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import { Input as InputLayout } from "./styles";

interface InputProps {
  type: string;
  name?: string;
  error?: FieldError;
  placeholder: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, type, error = null, placeholder, ...rest },
  ref
) => {
  return (
    <>
      <InputLayout
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
      {!!error && <InputError>{error.message}</InputError>}
    </>
  );
};

export const Input = forwardRef(InputBase);
