import { FiAlertCircle } from "react-icons/fi";
import { Content } from "./styles";

interface InputErrorProps {
  children: React.ReactNode;
}

export function InputError({ children }: InputErrorProps) {
  return (
    <Content>
      <FiAlertCircle color="#dd0606" fontWeight={700} size={20} />
      <p>{children}!</p>
    </Content>
  );
}
