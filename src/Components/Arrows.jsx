import React from "react";
import styled from "styled-components";
import { CgArrowLongRight, CgArrowLeft } from "react-icons/cg";

const Style = styled.div`
  > svg {
    margin: 0.5em;
    color: #314584;
    cursor: pointer;
  }
  :first-child {
    color: #bbbbbc;
  }
`;

export default function Arrows({ handleClick }) {
  return (
    <Style>
      <CgArrowLeft size={24} color={"#bbbbbc"} onClick={handleClick} />
      <CgArrowLongRight size={36} onClick={handleClick} />
    </Style>
  );
}
