import styled from "styled-components";
import Container from "./Container";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Content = styled.div`
  max-width: 840px;
  margin: 5% auto 10% auto;
  strong {
    color: purple;
  }
`;


const QA = () => {
  return (
    <Container
      style={{
        background: "#eeeded",
      }}
      id="intro"
    >
        <Typography
        style={{ textAlign: "center", marginTop: "5%" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        F A Q
      </Typography>
      <Content>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>什么是 If Club？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 20, fontSize: 20 }}variant="body2">
              隆重介绍一下：
            </Typography>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              <strong>“把想法变为现实”</strong> 是If Club 诞生的初衷。
              秉持着这个理念，【如果我做了一套NFT，会有怎样的收获？】这个想法应运而生。
              并且成为了If Club的首个实践项目。
            </Typography>
          </AccordionDetails>
          </Accordion>
          <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>这个NFT 有啥用？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 20, fontSize: 20 }}variant="body2">
              没啥大用处，就是个png图片。
            </Typography>
          </AccordionDetails>
          </Accordion>

          <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>NFT 真的免费送吗？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              没错！不玩虚的，不整套路，免费送！
            </Typography>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              但由于我们无法主观上选择赠送对象，因此决定采用Twitter抽奖的方式，尽可能做到公平公正。
            </Typography>
          </AccordionDetails>
          </Accordion>

          <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>为什么限量 1231 张呢？这个数字有什么含义吗？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              本来只想做1000张的，但我一个朋友点了我一下，说“你就搞1000张，我想买生日编号的NFT都买不到”。
              （没错！TA就是12月的生日）
            </Typography>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              因此，我们决定发 1231 张！
            </Typography>
          </AccordionDetails>
          </Accordion>

          <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>为什么要上 Polygon ？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              为了给你们送的时候，能少支付甚至不支付 GAS FEE，能省一点是一点。
            </Typography>
          </AccordionDetails>
          </Accordion>

          <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>什么是 Polygon ？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              额。。。咱就是说，要不再去做点功课？
            </Typography>
          </AccordionDetails>
          </Accordion>

          <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>为什么说要送，但 OpenSea 却设置了0.01ETH的价格 ？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              这个和大家无关啊！完全是为了我那个朋友，我要把TA的想法也变为现实！你们参与抽奖就好！
              (顺带提一嘴，不在官网做免费mint功能也是想让那个朋友买到TA生日编号的 NFT)
            </Typography>
          </AccordionDetails>
          </Accordion>

          <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>抽奖规则及赠送方式 ？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              1. 每期抽奖个数不会很多，因为我们对自己的项目有清晰的认知，万一说送50个，但参与抽奖就3个人，我会很尴尬。
            </Typography>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              2. 同时我们也不排除有人极度钟意按生日编号去购买NFT，为了避免他们买不到，所以将优先抽非生日编号的NFT进行赠送。
              （当然了， 如果他们不买，到头来还是要送出去的）
            </Typography>
          </AccordionDetails>
          </Accordion>

          <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>项目方会保地板价吗？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              琢磨啥呢？项目方想上以太链都因为没钱放弃了！还保啥地板价！
            </Typography>
          </AccordionDetails>
          </Accordion>

          <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>项目方有社群吗？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              暂时没有任何社群！费劲儿！也不想提高参与这个项目的门槛！
            </Typography>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              不过，人嘛！就是要敢想：<strong>万一要是出圈了，</strong>可以考虑搞一个吹水群！
            </Typography>
          </AccordionDetails>
          </Accordion>

          <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>惊喜？？？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              快去参与抽奖吧！再晚就不赶趟儿了！
            </Typography>
          </AccordionDetails>
          </Accordion>
          
      </Content>
    </Container>
  )
}
export default QA