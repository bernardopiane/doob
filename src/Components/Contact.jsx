import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import MyButton from "./MyButton";
import SectionHeading from "./SectionHeading";

const Wrapper = styled.div`
  padding: 6em 0;
  font-family: "Work Sans", sans-serif;
`;

const TitleArea = styled.div`
  padding-bottom: 1em;
`;

const Title = styled.div`
  color: #314584;
  font-size: 48px;
  font-weight: 600;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
`;

const MyInput = styled.input`
  background-color: #f4fafe;
  border: none;
  padding: 1em;
  margin: 1em 0;
  width: 100%;
`;

const MyTextArea = styled.textarea`
  background-color: #f4fafe;
  border: none;
  padding: 1em;
  margin: 1em 0 4em 0;
  width: 100%;
`;

export default function Contact() {
  return (
    <Wrapper>
      <Container>
        <SectionHeading>Contact us</SectionHeading>
        <TitleArea>
          <Title>Get in Touch</Title>
        </TitleArea>
        <form>
          <Row>
            <Col xs={12} lg={6}>
              <MyInput type="text" name="mail" placeholder={"Your email"} />
            </Col>
            <Col xs={12} lg={6}>
              <MyInput type="text" name="subject" placeholder={"Subject"} />
            </Col>
            <Col xs={12}>
              <MyTextArea
                name="content"
                id="content"
                placeholder={"Message here..."}
                rows={5}
              />
            </Col>
          </Row>
          <ButtonArea>
            {/* <input type="submit" value="Enviar" /> */}
            <MyButton>Send Message</MyButton>
          </ButtonArea>
        </form>
      </Container>
    </Wrapper>
  );
}
