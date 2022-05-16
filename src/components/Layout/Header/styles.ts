import styled from "styled-components";

export const Content = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;

  background: var(--background);

  padding: 1rem;

  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const Container = styled.div`
  p {
    font-size: 3rem;
    font-weight: 300;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
