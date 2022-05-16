import { IconToastError, IconToastSucess } from "assets/icons/icons";
import { Container, IconContainer } from "./styles";

interface CustomToastProps {
  title?: string;
  message: string;
  status: "success" | "error";
}

export function CustomToast({ title, message, status }: CustomToastProps) {
  const icon = {
    success: <IconToastSucess />,
    error: <IconToastError />,
  };

  return (
    <>
      <Container typeError={status}>
        <IconContainer>{icon[status]}</IconContainer>
        <div className="message">
          {!!title && <span>{title}</span>}
          <p>{message}</p>
        </div>
      </Container>
    </>
  );
}
