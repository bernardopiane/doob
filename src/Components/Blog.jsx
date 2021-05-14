import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import BG from "../images/BgShape5.png";
import Arrows from "./Arrows";
import BlogCard from "./BlogCard";
import SectionHeading from "./SectionHeading";

const Wrapper = styled.div`
  padding: 6em 0;
  background-image: url(${BG});
  background-position: right center;
  background-size: contain;
  background-repeat: no-repeat;
  font-family: "Work Sans", sans-serif;
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-bottom: 3em;
`;

const Title = styled.div`
  color: #314584;
  font-size: 48px;
  font-weight: 600;
`;

const CardArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function Blog() {
  return (
    <Wrapper>
      <Container>
        <SectionHeading>Blog Stories</SectionHeading>
        <TitleArea>
          <Title>Check Our News</Title>
          <Arrows />
        </TitleArea>
        <CardArea>
          <BlogCard primary title={"New Adventure"} heading={"17 March 2019"}>
            Vestibulum ac diam sit amet quam vehicula elementum amet est on dui.
            Nulla porttitor accumsan tincidunt.
          </BlogCard>
          <BlogCard title={"New Adventure"} heading={"17 March 2019"}>
            Vestibulum ac diam sit amet quam vehicula elementum amet est on dui.
            Nulla porttitor accumsan tincidunt.
          </BlogCard>
          <BlogCard title={"New Adventure"} heading={"17 March 2019"}>
            Vestibulum ac diam sit amet quam vehicula elementum amet est on dui.
            Nulla porttitor accumsan tincidunt.
          </BlogCard>
        </CardArea>
      </Container>
    </Wrapper>
  );
}
