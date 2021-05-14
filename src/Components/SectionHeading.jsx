import React from "react";
import styled from "styled-components";

const Style = styled.div`
  color: #ff3946;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Work Sans", sans-serif;
`;

export default function SectionHeading({ children }) {
  return <Style>{children}</Style>;
}
