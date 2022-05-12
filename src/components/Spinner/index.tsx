import { SpinnerLoading } from "./styles";

interface ISpinnerLoadingProps {
  children: React.ReactNode;
}

export function Spinner({ children }: ISpinnerLoadingProps) {
  return <SpinnerLoading>{children}</SpinnerLoading>;
}
