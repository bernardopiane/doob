import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import styled from "styled-components";

import Logo from "../images/Logo.png";
import Link from "./Link";

const Wrapper = styled.div`
  padding: 2em 4em;
  display: flex;
  align-items: center;
  font-family: "Work Sans", sans-serif;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const LinkArea = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
  @media (max-width: 800px) {
    justify-content: end;
  }

  > * {
    margin-right: 2em;
  }
`;

const NavbarEnd = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const MyButton = styled(Button)`
  margin: 0 0 0 3em;
  padding: 1em 2em;
  background-color: white;
  border-color: white;
  color: #ff3946;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.125);
  font-weight: 600;

  :active,
  :focus,
  :hover,
  :active:focus {
    background-color: white;
    border-color: white;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.125);
    color: #ff3946;
  }
  :active:focus {
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
  }
`;

export default function Navbar() {
  return (
    <Wrapper>
      <Image src={Logo} fluid />
      <Container>
        <Content>
          <LinkArea>
            <Link>Home</Link>
            <Link>About us</Link>
            <Link>Portfolio</Link>
            <Link>Blog</Link>
            <Link>Contact us</Link>
          </LinkArea>
          <NavbarEnd>
            <Link>EN</Link>
            <MyButton>Contact Us ARR</MyButton>
          </NavbarEnd>
        </Content>
      </Container>
    </Wrapper>
  );
}
