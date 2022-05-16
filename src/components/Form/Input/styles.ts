import styled from "styled-components";

export const Input = styled.input`
  border: 0 none;
  border-radius: 10px;

  padding: 1rem;
  height: 3.125rem;

  &:focus {
    border: 2px solid var(--search-button);
    outline: none;
  }
`;
