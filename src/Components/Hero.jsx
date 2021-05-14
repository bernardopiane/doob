import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import Link from "./Link";
import Navbar from "./Navbar";

import Ilustration from "../images/Vector Illustration.png";
import BgShape from "../images/BgShape.png";
import MyButton from "./MyButton";

const Wrapper = styled.div`
  padding-bottom: 6em;
  background-image: url(${BgShape});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center right;
`;

const Content = styled.div`
  display: flex;
`;

const TitleArea = styled.div`
  font-family: "Work Sans", sans-serif;
  padding: 10em 0;
`;

const Title = styled.div`
  font-size: 73px;
  font-weight: 600;
  color: #314584;
`;

const Text = styled.div`
  color: #6e757a;
  font-size: 18px;
`;

const ButtonArea = styled.div`
  display: flex;
  margin-top: 2em;
  align-items: center;
  column-gap: 2em;
`;

const MyImage = styled(Image)`
  @media (max-width: 1200px) {
    display: none;
  }
`;

export default function Hero() {
  return (
    <Wrapper>
      <Navbar />
      <Content>
        <Container>
          <Row>
            <Col xs={12} xl={{ offset: 3, span: 6 }}>
              <TitleArea>
                <Title>The Spirit of Digital Agency.</Title>
                <Text>
                  Vestibulum ac diam sit amet quam vehicula elementum amet est
                  on dui. Nulla porttitor accumsan tincidunt.
                </Text>
                <ButtonArea>
                  <MyButton>More About us</MyButton>
                  <Link>Get in Touch</Link>
                </ButtonArea>
              </TitleArea>
            </Col>
          </Row>
        </Container>
        <MyImage src={Ilustration} fluid />
      </Content>
    </Wrapper>
  );
}
