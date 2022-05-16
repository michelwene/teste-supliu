import { InputError } from "components/InputError";
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { FieldError } from "react-hook-form";
import { Input as InputLayout } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  error?: FieldError;
  placeholder: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, placeholder, ...rest },
  ref
) => {
  return (
    <>
      <InputLayout
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
