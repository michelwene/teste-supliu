import styled from "styled-components";

export const Form = styled.form`
  background-color: #f1f1f1;
  border-radius: 5px;

  align-self: center;
  align-items: center;
  flex-direction: column;
  display: flex;

  margin: 3rem 0;
  width: 350px;
  min-height: 500px;
  height: auto;

  padding: 1rem;
  row-gap: 5rem;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
