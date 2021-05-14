import React from "react";
import styled from "styled-components";
import Link from "./Link";
import { FaDribbble, FaTwitter, FaFacebookF } from "react-icons/fa";
import { Container } from "react-bootstrap";

const Wrapper = styled.div`
  padding: 3em 0;
  background-color: #314584;
  text-align: center;
  color: white;
  font-family: "Work Sans", sans-serif;
`;

const LinkArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3em;
  flex-wrap: wrap;
  > div,
  > svg {
    margin: 1em 0;
    cursor: pointer;
    transition: color 125ms ease;
    :hover {
      color: #b4b4b4;
    }
  }
`;

const Text = styled.div`
  font-size: ${(props) => (props.size ? props.size : "14px")};
  font-weight: ${(props) => (props.bold ? "600" : "initial")};
  margin: 1em 0;
`;

const Header = styled.div`
  color: #ff3946;
  font-weight: 600;
  font-size: 48px;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Text size={"18px"} bold>
          DOOB
        </Text>
        <Header>CREATIVITY ABOVE</Header>
        <LinkArea>
          <Link textColor={"white"}>Home</Link>
          <Link textColor={"white"}>About us</Link>
          <Link textColor={"white"}>Portfolio</Link>
          <Link textColor={"white"}>Blog</Link>
          <Link textColor={"white"}>Contact us</Link>
        </LinkArea>
        <Text> © 2019 - Doob,All Right Reserved</Text>
        <LinkArea>
          <FaFacebookF size={36} />
          <FaTwitter size={36} />
          <FaDribbble size={36} />
        </LinkArea>
      </Container>
    </Wrapper>
  );
}
