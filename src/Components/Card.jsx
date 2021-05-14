import React from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  margin: 0 3em 2em 3em;
  padding: 3em;
  box-shadow: 0 0 10px 0 rgba(204, 204, 204, 0.25);
  font-family: "Work Sans", sans-serif;
  background-color: white;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #314584;
  margin: 1em 0;
`;

const Text = styled.div`
  color: #314584;
`;

export default function Card({ icon, title, children }) {
  return (
    <Wrapper>
      <Image src={icon} fluid />
      <Title>{title}</Title>
      <Text>{children}</Text>
    </Wrapper>
  );
}
