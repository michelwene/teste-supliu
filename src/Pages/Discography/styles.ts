import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-bottom: 0.5rem;

  p {
    font-weight: 300;
    @media (max-width: 600px) {
      text-align: center;
    }
  }

  div {
    display: flex;
    column-gap: 1rem;
    height: 50px;

    @media (max-width: 600px) {
      align-items: center;
      flex-direction: column;
      height: auto;
      row-gap: 1rem;
      width: 100%;
    }
    div {
      flex: 2;
      flex-direction: column;
      gap: 0.5rem;

      div {
        display: flex;
        flex-direction: row;
      }

      input {
        border: 0 none;
        border-radius: 30px;
        padding: 1rem;
        width: 100%;
      }
    }

    button {
      border: 0 none;
      border-radius: 30px;
      background-color: var(--search-button);
      color: #fafafa;
      font-size: 1.125rem;
      font-weight: 300;

      max-width: 200px;
      flex: 1;

      transition: filter 0.3s;

      @media (max-width: 600px) {
        padding: 1rem;
        width: 100%;
      }

      &:disabled {
        opacity: 0.5;
      }
    }

    button:nth-child(1) {
      height: 100%;
      width: 200px;
    }
  }
`;

export const Table = styled.table`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);

  display: flex;
  flex-direction: column;

  margin-top: 2rem;
  padding: 13px;
  row-gap: 1rem;

  thead {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    & > tr {
      display: flex;
      justify-content: space-between;

      & > div {
        display: flex;
        column-gap: 2.25rem;
      }
    }
  }

  tbody {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    > tr {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding-right: 1.7rem;

      > div {
        align-items: center;
        display: flex;
        column-gap: 2rem;

        @media (max-width: 600px) {
          column-gap: 0.5rem;
        }
      }
    }
  }
`;
