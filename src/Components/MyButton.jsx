// import { Button } from "@material-ui/core";
import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const Style = styled(Button)`
  padding: 1em 3em;
  border-radius: 36px;
  border-color: #ff3946;
  background-color: #ff3946;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.125);
  font-weight: 600;

  :active,
  :focus,
  :hover,
  :active:focus {
    background-color: #e93541;
    border-color: #e93541;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.125);
  }
  :active:focus {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }
`;

export default function MyButton({ children, handleClick }) {
  return <Style onClick={handleClick}>{children}</Style>;
}
