import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";

import BG from "../images/BgShape3.png";

import IMG from "../images/Ilus2.png";
import Arrows from "./Arrows";

const Wrapper = styled.div`
  padding: 6em 0;
  background-image: url(${BG});
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;
  display: flex;
`;

const Padding = styled.div`
  flex: 1;
  padding-left: 10em;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const MyContainer = styled(Container)`
  flex: 2;
`;

const Title = styled.div`
  font-size: 48px;
  color: #314584;
  font-weight: 600;
  padding: 0 0 1em 0;
`;

const Text = styled.div`
  color: #314584;
  padding: 0 0 1em 0;
`;

const Header = styled.div`
  color: #ff3946;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  padding: 0 0 1em 0;
`;

export default function About() {
  return (
    <Wrapper>
      <Padding>
        <Image src={IMG} fluid />
      </Padding>
      <MyContainer>
        <Row>
          <Col xl={{ offset: 2, span: 6 }}>
            <Header>Our company</Header>
            <Title>Some Fine Words About Us</Title>
            <Text>
              Vestibulum ac diam sit amet quam vehicula elementum amet est on
              dui. Nulla porttitor accumsan tincidunt.Vestibulum ac diam sit
              amet. Quam vehicula elementum amet est on dui. Nulla porttitor
              accumsan tincidunt.
            </Text>
            <Arrows />
          </Col>
        </Row>
      </MyContainer>
    </Wrapper>
  );
}
