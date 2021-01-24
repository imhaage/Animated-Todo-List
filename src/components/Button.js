import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 0.25rem;
`;

export const Add = styled(Button)`
  color: #fff;
  background-color: ${({theme}) => theme.colors.primary};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const Remove = styled(Button)`
  padding: 0.2rem 0.3rem;
`;
