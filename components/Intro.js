import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import Container from "./Container";
import { padWidth } from "../utils";
import { red } from "@mui/material/colors";




const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 60px;
`;
const ContentImage = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  
  width: 250px;
  height: 250px;
  overflow: hidden;
  border-radius: 7%;
  border: 2px solid #000;
  img {
    width: 100%;
  }
`;

function Intro() {
  return (
    <Container
      style={{
        background: "#fff",
      }}
      id="intro"
    >
      <Content>
        <ContentImage>
          <img src="/demo.gif" />
        </ContentImage>
        <Typography
          style={{
            marginTop: "5%",
            fontSize: 25,
          }}
          variant="body1"
          
        >
          IF CLUB 首次发行限量 <strong>1231</strong> 份独一无二的【The Flying Ghost】NFT！
        </Typography>
        <Typography
          style={{
            marginTop: "2%",
            fontSize: 25,
          }}
          variant="body1"
          gutterBottom
        >
            <img
            style={{ width: 30, position: "relative", top: 5 }}
            src="/flower.png"
          />
          <strong>  并且免费送! </strong>{" "}
          <img
            style={{ width: 30, position: "relative", top: 5 }}
            src="/flower.png"
          />
        </Typography>
        <div
          style={{
            padding: "40px 0",
          }}
        >
          <Tooltip title="官方 OpenSea">
            <a
              href="https://opensea.io/collection/theflyingghost"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{
                  cursor: "pointer",
                  width: 40,
                  marginRight: "40px",
                }}
                src="/icon/opensea.png"
              />
            </a>
          </Tooltip>
          
          <Tooltip title="官方 Twitter">
            <a
              href="https://twitter.com/IfClubOfficial"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{
                  width: 40,
                }}
                src="/icon/twitter.png"
              />
            </a>
          </Tooltip>
        </div>
      </Content>
    </Container>

    
  );
}

export default Intro;
