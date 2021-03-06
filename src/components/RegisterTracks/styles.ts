import styled from "styled-components";

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  height: 100%;

  h1 {
    text-align: center;
  }

  & > div {
    width: 100%;

    display: flex;
    flex-direction: column;

    row-gap: 1rem;

    label {
      font-size: 1.125rem;
      font-weight: 700;
      text-align: center;
    }

    select {
      border-radius: 10px;
      border: 0 none;
      height: 3rem;
      outline: none;

      color: -internal-light-dark(black, white);
      font-size: 1.125rem;
      font-weight: 300;

      padding: 0 1rem;

      &:active {
        border: 2px solid var(--search-button);
      }
    }

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
