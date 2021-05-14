import React from "react";
import styled from "styled-components";

const Style = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => (props.textColor ? props.textColor : "#314584")};
  cursor: pointer;
  ::after {
    content: ".";
  }
`;

export default function Link({ children, textColor }) {
  return <Style textColor={textColor}>{children}</Style>;
}
