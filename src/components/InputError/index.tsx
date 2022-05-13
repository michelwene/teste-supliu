import { FiAlertCircle } from "react-icons/fi";
import { Content } from "./styles";

export function InputError({ error }) {
  if (error) {
    return (
      <Content>
        <FiAlertCircle color="#dd0606" size={20} />
        <p>{error}</p>
      </Content>
    );
  }

  return null;
}
