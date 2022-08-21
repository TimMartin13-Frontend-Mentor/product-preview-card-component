import styled from "styled-components";

export const Text = styled.h4`
  font-size: 11px;
  text-align: center;
  color: ${(props) => props.theme.darkGrayishBlue};
`;

export const Link = styled.a`
  color: ${(props) => props.theme.blue};
`;
