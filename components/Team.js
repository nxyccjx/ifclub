import styled from "styled-components";
import Typography from "@mui/material/Typography";

import { padWidth } from "../utils";
import Container from "./Container";

const Content = styled.div`
  max-width: 840px;
  margin: 0 auto 5% auto;ßß
  strong {
    color: red;
  }
`;

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
        <div style={{ marginTop: 10 }}>{props.role}</div>
        <div style={{ marginTop: 5 }}>{props.description}</div>
        <div style={{ marginTop: 20 }}>
          {props.twitterLink && (
            <a href={props.twitterLink} target="_blank" rel="noreferrer">
              <img style={{ width: 30 }} src="/icon/twitter.png" alt="" />
            </a>
          )}
          {props.openseaLink && (
            <a
              href={props.openseaLink}
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: 20 }}
            >
              <img style={{ width: 30 }} src="/icons/opensea.svg" alt="" />
            </a>
          )}
        </div>
      </div>
    </TeamMemberWrapper>
  );
}

const TeamWrapper = styled.div`
  margin-top: 8%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${padWidth}) {
    flex-direction: column;
    flex-wrap: rap;
    align-items: center;
  }
`;

function Team() {
  return (
    <Container
      style={{
        background: "#fff",
      }}
      id="team"
    >
      <Typography
        style={{ textAlign: "center", marginTop: "5%" }}
        variant="h4"
        gutterBottom
        component="div"
      >
        项目组成员
      </Typography>

      <Content>

        <TeamWrapper>
          <TeamMember
            img="/profile/erdong.png"
            name="ErDong"
            role="项目发起人 / 只会“ctrl C / V”的码手 "
            description="【思想上的巨人 ➡️  行动上的巨人】"
            twitterLink="https://twitter.com/ErDong_eth"
          />
          <TeamMember
            img="/profile/Lancy.png"
            name="Lancy"
            role="项目联合发起人 / 公众号灵魂写手"

            description="最大的优点就是老实巴交，但偶尔又神经兮兮"
            twitterLink="https://twitter.com/Lancy_Ifclub"

          />
          
        </TeamWrapper>
        <TeamWrapper>
          <TeamMember
            img="/profile/Sherry.png"
            name="Sherry"
            role="项目联合发起人 / 运营能手 / 大胃王"

            description="班么不上，饭么猛吃！擅长一次吃三个人的饭！"
            twitterLink="https://twitter.com/ShilohSama"


          />
        </TeamWrapper>
      </Content>
    </Container>
  );
}

export default Team;
