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




const Roadmap = () => {
  return (
    <Container
      style={{
        background: "#fff",
      }}
      id="intro"
    >
      <Content>
      <Typography style={{ textAlign: "center" }} variant="h3" gutterBottom>
          我们的路线图
        </Typography>
        <Typography style={{ marginBottom: 20, marginTop: 50, fontSize: 25}} variant="body1" gutterBottom>
        <strong>2022 Q1 </strong>过去了，就不提了。
        </Typography>
        <Typography style={{ marginBottom: 20, fontSize: 25}}variant="body1" gutterBottom>
          <strong>2022 Q2 </strong>我们在X月X日将【The Flying Ghost】NFT 项目正式上线，随后会在Twitter开始我们的抽奖。
        </Typography>
        <Typography style={{ marginBottom: 20, fontSize: 25}} variant="body1" gutterBottom>
        <strong>2022 Q3 </strong>估计还在抽奖呢，所以也没啥别的计划。
        </Typography>
        <Typography style={{ marginBottom: 20, fontSize: 25}} variant="body1" gutterBottom>
        <strong>2022 Q4 </strong>到Q4初期这个时间点，估摸着应该送完了。但 NFT 属于一锤子买卖，大概率就没啥发展前景了。不过可以考虑下 If Club 的发展方向。（如果有可能的话）
        </Typography>
        <Typography style={{ marginBottom: 20, fontSize: 25 }} variant="body1" gutterBottom>
          顺便提一嘴，元宇宙、链游是不会做了，没钱也没那个实力。如果未来真的有啥想实践的项目，估计也是做了之后，才会公布。
          毕竟我们是低调且埋头苦干的团队。（手动狗头）
        </Typography>
        
      </Content>
    </Container>
  )
}
export default Roadmap