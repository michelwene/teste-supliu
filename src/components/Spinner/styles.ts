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

  svg {
    animation: spinner 1.5s linear infinite;
  }
`;
