import styled from "styled-components";

export const Content = styled.header`
  align-self: center;
  column-gap: 1rem;
  display: flex;

  button {
    color: #f1f1f1;
    border: 0 none;
    border-radius: 5px;
    background-color: var(--search-button);

    padding: 1rem;

    &:active {
      background-color: var(--search-button-active);
    }
  }
`;
