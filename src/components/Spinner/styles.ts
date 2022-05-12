import styled from "styled-components";

export const SpinnerLoading = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  align-items: center;
  column-gap: 1rem;
  display: flex;
  justify-content: center;
  height: 2rem;

  & > div {
    width: 30px;
    height: 30px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #383636;
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
`;
