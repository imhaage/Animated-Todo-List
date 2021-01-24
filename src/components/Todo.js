import React from "react";
import styled, {css} from "styled-components";

export const Todo = styled.div`
  padding: 0.2rem 0.3rem;
  cursor: pointer;

  ${({isCompleted}) => isCompleted && css`
    text-decoration: line-through;
    font-style: italic;
    color: #ababab;
  `}
`;
