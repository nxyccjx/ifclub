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
        <Typography style={{ marginBottom: 2, marginTop: 50, fontSize: 25}} variant="body1" gutterBottom>
        <strong>2022 Q1 </strong>  
        </Typography>
        <Typography style={{ marginBottom: 20, fontSize: 23}} variant="body1" gutterBottom>
         过去了，就不提了。
        </Typography>

        <Typography style={{ marginBottom: 2, fontSize: 25}}variant="body1" gutterBottom>
          <strong>2022 Q2 </strong>   
        </Typography>
        <Typography style={{ marginBottom: 2, fontSize: 22}} variant="body1" gutterBottom>
        4月16日，【The Flying Ghost】NFT 项目正式上线，已在Twitter开启赠送。
        </Typography>
        <Typography style={{ marginBottom: 20, fontSize: 23}} variant="body1" gutterBottom>
        6月，【Buddha-Like Youths】佛系青年 NFT 即将上线。
        </Typography>


        <Typography style={{ marginBottom: 2, fontSize: 25}} variant="body1" gutterBottom>
        <strong>2022 Q3 </strong>
        </Typography>
        <Typography style={{ marginBottom: 20, fontSize: 23}} variant="body1" gutterBottom>
        希望可以达成一些IP方向的合作，持续为If Club这两个不知名的NFT项目赋能，我们在努力～。
        </Typography>

        <Typography style={{ marginBottom: 2, fontSize: 25}} variant="body1" gutterBottom>
        <strong>2022 Q4 </strong>   
        </Typography>
        <Typography style={{ marginBottom: 2, fontSize: 23}} variant="body1" gutterBottom>
        到Q4初期这个时间点，希望小幽灵可以送完。
        </Typography>
        <Typography style={{ marginBottom: 2, fontSize: 23}} variant="body1" gutterBottom>
        也希望可以【佛系青年】能被大家喜欢。
        </Typography>
        <Typography style={{ marginBottom: 50, fontSize: 23}} variant="body1" gutterBottom>
        但是If Club将在 Web1 + Web2 + Web3 持续折腾，我们的想法很多，但苦于实力有限，也会努力一步一步变为现实。
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