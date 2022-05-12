import styled from "styled-components";

export const Content = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;

  background: var(--background);

  margin: 0 auto;
  padding: 1rem;
  width: 80%;

  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  p {
    font-size: 3rem;
    font-weight: 300;
  }
`;
