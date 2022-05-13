import styled from "styled-components";

export const Search = styled.div`
  width: 100%;
  padding-bottom: 1rem;

  p {
    font-weight: 300;
  }

  form {
    display: flex;
    column-gap: 1rem;
    height: 50px;

    margin-top: 0.5rem;

    & > div {
      flex: 2;

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

      max-width: 170px;
      flex: 1;

      transition: filter 0.3s;
    }

    button:nth-child(1) {
      height: 100%;
      width: 200px;
    }
  }
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;

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

    & > tr {
      display: flex;
      justify-content: space-between;

      padding-right: 1.7rem;

      & > div {
        display: flex;
        column-gap: 2.5rem;
      }
    }
  }
`;
