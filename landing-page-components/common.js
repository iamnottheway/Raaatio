import styled from "styled-components";

export const Title = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 154.5%;

  color: ${(props) => (props.color ? props.color : "#000")};
  margin: 5px 0;

  @media (max-width: 500px) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 181%;
  color: ${(props) => (props.color ? props.color : "#000")};
  margin: 3px 0;
  margin: 5px 0;
`;

export const Outer = styled.div`
  /* width: 100%; */
  height: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 10%;
`;
