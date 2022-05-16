import styled from "styled-components";

type typeError = {
  typeError: "success" | "error";
};

export const Container = styled.div<typeError>`
  align-items: center;
  display: flex;
  justify-content: flex-start;

  position: relative;
  width: 100%;
  z-index: 9999999999999999999;

  span {
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 0.9375rem;
    margin-bottom: 0.3125rem;
  }

  p {
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 0.8125rem;
  }

  .message {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const IconContainer = styled.div`
  margin: 0 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
