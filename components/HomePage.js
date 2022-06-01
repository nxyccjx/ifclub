import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Container from "./Container";
import { padWidth } from "../utils";





const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 60px;
  padding-top: 60px;
  width: 100%;
  @media only screen and (max-width: ${padWidth}) {
    width: 100%;
    max-width: 840px;
    margin-bottom: 1%;
    }
  
`;





function HomePage() {
  return (
    <Container
      style={{
        background: "#fff",
      }}
      id="intro"
    >
      <Content>
      <Typography style={{ textAlign: "center" }} variant="h3" gutterBottom>
          <strong>If Club Official</strong>
          <Tooltip title="官方 Twitter">
            <a
              href="https://twitter.com/IfClubOfficial"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{
                  marginLeft: 30,
                  marginTop: 10,
                  width: 40,
                }}
                src="/icon/twitter.png"
              />
            </a>
          </Tooltip>
        </Typography>
        <Typography
          style={{
            marginTop: "1%",
            fontSize: 25,
          }}
          variant="body1"
        >
          <strong style={{color: 'purple'}}>“把想法变为现实”</strong> 是If Club 诞生的初衷。
        </Typography>
        <Typography
          style={{
            marginTop: "1%",
            fontSize: 25,
          }}
          variant="body1"
          gutterBottom
        >
          【如果我做了一套NFT，会有怎样的收获？】这个想法应运而生,
          并开启实践。
          
        </Typography>

        <Typography style={{ marginTop: "3%",textAlign: "center" }} variant="h4" gutterBottom>
          <strong>NFT 项目</strong>
        </Typography>

      </Content>
    </Container>

    
  );
}

export default HomePage;
