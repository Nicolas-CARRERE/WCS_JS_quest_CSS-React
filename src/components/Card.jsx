// Card.jsx

import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 50px;
  border-radius: 20px;
  border: 1px solid #000;
`;

const CardTop = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #aa8b56;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Logo = styled.img`
  width: 40%;
  background-color: #aa8b56;
`;

const Title = styled.h1`
  color: #0d1a26;
  font-weight: 400;
  font-size: 30px;
`;

const CardBody = styled.div`
  width: 100%;
  background-color: #f0ebce;
  height: 280px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Message = styled.h3`
  width: 100%;
  font-size: 36px;
  font-weight: bold;
  margin: 0 auto;
`;

const BubbleContainer = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Bubble = styled.p`
  height: 27px;
  width: 20%
  vertical-align: middle;
  text-align: center;
  font-size: 20px;
  background-color: #4E6C50;
  border-radius: 20px;
  padding: 0 20px;
  margin: 15px 5px;
  color: #f0ebce;
`;

const Card = () => (
  <Container>
    <CardTop>
      <Logo src={logo} alt="logo" />
      <Title>Web Developer</Title>
    </CardTop>
    <CardBody>
      <Message>#OpenToWork</Message>
      <BubbleContainer>
        <Bubble>HTML</Bubble>
        <Bubble>CSS</Bubble>
        <Bubble>Javascript</Bubble>
        <Bubble>React</Bubble>
        <Bubble>Node</Bubble>
        <Bubble>Express</Bubble>
        <Bubble>Tailwind</Bubble>
        <Bubble>SQL</Bubble>
        <Bubble>Git/Github</Bubble>
      </BubbleContainer>
    </CardBody>
  </Container>
);

export default Card;
