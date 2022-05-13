import { Content } from "./styles";

interface ISubmitSuccessProps {
  children: React.ReactNode;
}

export function SubmitSuccess({ children }) {
  return (
    <Content>
      <p>{children}</p>
    </Content>
  );
}
