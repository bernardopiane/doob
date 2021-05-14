import React from "react";
import styled from "styled-components";
import { CgArrowLongRight } from "react-icons/cg";

const Wrapper = styled.div`
  min-width: 250px;
  flex: 1;
  margin: 1em 1em;
  padding: 3em;
  box-shadow: 0 5px 10px 0 #c2c2c2;
  font-family: "Work Sans", sans-serif;
  background-color: ${(props) => (props.primary ? "#ff3946" : "white")};
  color: ${(props) => (props.primary ? "white" : "#314584")};
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 0.5em;
`;

const Heading = styled.div`
  font-size: 14px;
  padding-bottom: 2em;
`;

const Text = styled.div`
  font-size: 18px;
`;

const Arrow = styled.div`
  align-self: end;
  padding-top: 2em;
  > svg {
    cursor: pointer;
  }
`;

export default function BlogCard({ title, heading, children, primary }) {
  return (
    <Wrapper primary={primary}>
      {title && <Title>{title}</Title>}
      {heading && <Heading>{heading}</Heading>}
      <Text>{children}</Text>
      <Arrow>
        <CgArrowLongRight size={36} />
      </Arrow>
    </Wrapper>
  );
}
