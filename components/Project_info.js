import styled from "styled-components";
import React, { useState } from "react";
import Link from 'next/link';
import { padWidth } from "../utils";
import Container from "./Container";

const Content = styled.div`
  max-width: 840px;
  margin: 0 auto 5% auto;ßß
  strong {
    color: red;
  }
`;


const StyledLink = styled.a`
    padding: 8px;
    border-radius: 45%;
    border: 2px solid #000;
`


const Avatar = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 20%;
  border: 4px solid #000;
  img {
    width: 100%;
  }
`;

const TeamMemberWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: ${padWidth}) {
    width: 100%;
    max-width: 480px;
    margin-bottom: 10%;
  }
`;

function TeamMember(props) {
  return (
    <TeamMemberWrapper>
      <Avatar>
        <img src={props.img} alt="" />
      </Avatar>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <div style={{ fontSize: 28, fontWeight: "bold" }}>{props.name}</div>
        <div style={{ marginTop: 15 }}>{props.description}</div>
        <div style={{ marginTop: 25 }}>
          {props.projectLink && (
            <Link href={props.projectLink} passHref>
            <StyledLink style={{fontSize: 20}}>点击查看</StyledLink>
            </Link>
          )}
        </div>
      </div>
    </TeamMemberWrapper>
  );
}

const TeamWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${padWidth}) {
    flex-direction: column;
    flex-wrap: rap;
    align-items: center;
  }
`;

function Project_info() {
  return (
    <Container
      style={{
        background: "#fff",
      }}
      id="project"
    >
      <Content>

        <TeamWrapper>
          <TeamMember
            img="/demo.gif"
            name="The Flying Ghost"
            description="限量1231张小幽灵NFT免费送！先到先得～"
            projectLink='/tfg'
          />
          <TeamMember
            img="/bly_logo.png"
            name="Buddha-Like Youths"
            description="佛系青年！这是一套有态度的NFT～"
            projectLink='/bly'
          />
        </TeamWrapper>
        
      </Content>
    </Container>
  );
}

export default Project_info;
