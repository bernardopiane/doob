import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Card from "./Card";
import MyButton from "./MyButton";

import BG from "../images/BgShape2.png";
import Icon1 from "../images/Icon.png";
import Icon2 from "../images/Icon2.png";

const Wrapper = styled.div`
  padding: 6em 0;
  font-family: "Work Sans", sans-serif;
  background-image: url(${BG});
  background-position: left center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Title = styled.div`
  font-size: 45px;
  color: #314584;
  font-weight: 600;
  margin-bottom: 1em;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TitleArea = styled.div`
  flex: 2;
  @media (max-width: 800px) {
    text-align: center;
    margin: 2em 0;
  }
`;

export default function Services() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <TitleArea>
            <Title>Anything you need,we’ve got you covered</Title>
            <MyButton>Get in Touch</MyButton>
          </TitleArea>
          <Card icon={Icon1} title={"Web & Graphic Design"}>
            Vestibulum ac diam sit amet quam vehicula elementum amet est on dui.
            Nulla porttitor accumsan tincidunt.
          </Card>
          <Card icon={Icon2} title={"Web & App Development"}>
            Vestibulum ac diam sit amet quam vehicula elementum amet est on dui.
            Nulla porttitor accumsan tincidunt.
          </Card>
        </Content>
      </Container>
    </Wrapper>
  );
}
