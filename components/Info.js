import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Container from "./Container";


const Content = styled.div`
    max-width: 800px;
    margin: 5% auto 5% auto;
    strong {
        color: Purple;
      }
`;


const info = () => {
  return (
    <Container
      style={{
        background: "#e2f2ed",
      }}
      id="intro"
    >
      <Content>
      <Typography style={{ textAlign: "center" }} variant="h3" gutterBottom>
          郑重声明
        </Typography>
        <Typography style={{ marginBottom: 20, marginTop: 50, fontSize: 25}}variant="body1" gutterBottom>
          1. <strong>If Club </strong>首个实践项目就是此次发行的【The Flying Ghost】NFT，并且决定<strong>免费</strong>赠送，
          <strong>请大家放心、积极、并以跑步前进的方式地参与！</strong>
        </Typography>
        <Typography style={{ marginBottom: 20, fontSize: 25}} variant="body1" gutterBottom>
          2. 我们这次设置了 <strong>1231 份限量作品</strong>用来赠送，但我们深知自个儿的项目不具备流量，所以只要参与，很大概率可以抽中，<strong>不必FOMO！</strong>
        </Typography>
        <Typography style={{ marginBottom: 20, fontSize: 25}} variant="body1" gutterBottom>
          3. 区别于<strong>传统 NFT 项目</strong>在肝白时要执行的各种操作，我们采取最传统的方式：<strong>Twitter抽奖</strong>，来随机赠送！（也叫Airdrop或者Giveaway，随便你们喜欢什么）
        </Typography>
        <Typography style={{ marginBottom: 20, fontSize: 25 }} variant="body1" gutterBottom>
          4. 我们承诺不会以任何方式再次增发！
        </Typography>
        <Typography style={{ marginBottom: 20, fontSize: 25 }} variant="body1" gutterBottom>
          5. 团队成员均是<strong>非美术科班出身</strong>，因此部分作品质量恐难以保证完美。
          不喜欢，不参与即可，切勿开艺术炮！（90度弯腰，鞠躬感谢）
        </Typography>
      </Content>
    </Container>
  )
}
export default info