import { Form } from "./styles";

interface IFormLayout {
  children: React.ReactNode;
  onSubmit?: (data: any) => void;
}

export function FormLayout({ children, onSubmit }: IFormLayout) {
  return (
    <>
      <Form onSubmit={onSubmit}>{children}</Form>
    </>
  );
}
