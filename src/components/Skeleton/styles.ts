import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  thead {
    display: flex;
    justify-content: space-between;
  }

  tbody {
    display: flex;

    tr {
      width: 100%;
      display: flex;
      justify-content: space-between;

      > div {
        display: flex;
        gap: 1rem;
      }
    }
  }
`;
