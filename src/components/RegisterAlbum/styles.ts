import styled from "styled-components";

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  height: 100%;

  & > div {
    width: 100%;

    display: flex;
    flex-direction: column;

    row-gap: 1rem;

    & > button {
      border: 0 none;
      border-radius: 30px;
      background-color: var(--search-button);
      color: #fafafa;
      font-size: 1.125rem;
      font-weight: 300;

      padding: 1rem;

      transition: filter 0.3s;
    }
  }
`;
