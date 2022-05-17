import styled from "styled-components";

export const Content = styled.header`
  align-self: center;
  column-gap: 1rem;
  display: flex;

  @media (max-width: 600px) {
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    row-gap: 1rem;
  }

  button {
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    color: #f1f1f1;
    border: 0 none;
    border-radius: 5px;
    background-color: var(--search-button);

    font-size: 1.125rem;

    padding: 1rem;

    transition: filter 0.2s;

    &:active {
      background-color: var(--search-button-active);
    }

    & + a button {
      color: #0c0c0c;
      border: 1px solid var(--search-button);
      background-color: white;

      font-weight: 500;
    }
  }
`;
