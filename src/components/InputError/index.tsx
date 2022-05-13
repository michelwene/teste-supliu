import { FiAlertCircle } from "react-icons/fi";
import { Content } from "./styles";

export function InputError({ error }) {
  if (error) {
    return (
      <Content>
        <FiAlertCircle color="#c53030" size={20} />
        <p>{error}</p>
      </Content>
    );
  }

  return null;
}
