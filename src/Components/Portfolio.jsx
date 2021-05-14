import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";

import Placeholder from "../images/300.png";
import BG from "../images/BgShape4.png";
import Arrows from "./Arrows";

const Wrapper = styled.div`
  padding: 6em 0;
  background-image: url(${BG});
  background-position: left center;
  background-size: contain;
  background-repeat: no-repeat;
  font-family: "Work Sans", sans-serif;
`;

const Title = styled.div`
  color: #314584;
  font-size: 48px;
  font-weight: 600;
`;

const ArrowArea = styled.div`
  display: flex;
  justify-content: end;
`;

const MyRow = styled(Row)`
  align-items: center;
`;

const GridArea = styled.div`
  margin: 3em 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
  grid-gap: 1.5em;
`;

const GridItem = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  color: #ff3946;
  font-weight: 600;
  cursor: pointer;
`;

export default function Portfolio() {
  return (
    <Wrapper>
      <Container>
        <MyRow>
          <Col xl={4} xs={10}>
            <Title>See some of our Creative work.</Title>
          </Col>
          <Col>
            <ArrowArea>
              <Arrows />
            </ArrowArea>
          </Col>
        </MyRow>
        <GridArea>
          <GridItem src={Placeholder} />
          <GridItem src={Placeholder} />
          <GridItem src={Placeholder} />
          <GridItem src={Placeholder} />
          <GridItem src={Placeholder} />
          <GridItem src={Placeholder} />
        </GridArea>
        <Footer>
          <div>See more of these</div>
        </Footer>
      </Container>
    </Wrapper>
  );
}
