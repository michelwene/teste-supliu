import { Content, Container } from "./styles";
import logoImg from "../../assets/logo.png";

export function Header() {
  return (
    <Content>
      <div>
        <img src={logoImg} alt="Logo" />
      </div>
      <Container>
        <p>Discografia</p>
      </Container>
    </Content>
  );
}
