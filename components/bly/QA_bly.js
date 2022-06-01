import styled from "styled-components";
import Link from 'next/link';
import Container from "../Container";
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

const StyledLink = styled.a`
    padding: 20px;
`

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
            <Typography style={{fontSize: 22 }}>我不是小幽灵持有者，可不可以现在问你要，然后参与抽白？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              理论上可以！但可能存在不能及时赠送的情况。还请理解！
            </Typography>
          </AccordionDetails>
          </Accordion>

          <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>什么时候开始抽呢？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              关注官方推特哦！
            </Typography>
          </AccordionDetails>
          </Accordion>

          <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>怎么mint呢？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              最好是电脑打开If Club官网！
            </Typography>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              通过浏览器的扩展程序，打开小狐狸钱包，切到polygon主网！
              然后在铸造界面，连接钱包！（确保有那么一丢丢余额来支付Gas哦！）
            </Typography>
          </AccordionDetails>
          </Accordion>


          <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>我的网络列表里没有polygon主网怎么办？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">点击
            <strong><a 
              href="https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/" 
              rel="noreferrer"
              target="_blank"
              style={{borderBottom: "2px dashed",margin:"1%"}}>这里</a></strong>，简单配置一下！
            </Typography>
            
          </AccordionDetails>
          </Accordion>


          <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>为什么发 2333 张呢？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              这个要怎么解释呢？大家应该都懂吧！
            </Typography>
          </AccordionDetails>
          </Accordion>

          <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>之前小幽灵还送呢，这次怎么不送了？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              说实话，赠送的这个过程，硬是让我又一次找回了上班的感觉。
            </Typography>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              谁愿意下班之后再上班呢？所以这次不打算麻烦自己了！
            </Typography>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              而且价格是真心便宜，贵族链上付Gas都不够，各位精神股东不打算支持一波吗～
            </Typography>
          </AccordionDetails>
          </Accordion>

          <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>你流量、关注度这么小，卖不出去岂不是很尴尬？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              你也不看看咱发的是啥！佛系青年～
            </Typography>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              卖不出去，我能咋办，爱咋咋地呗～
            </Typography>
          </AccordionDetails>
          </Accordion>

          <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>Opensea上能看到吗</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              在有精神股东mint之后，我会在官网附上链接。
            </Typography>
          </AccordionDetails>
          </Accordion>

          

          <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>对参与者有什么要求吗？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              1. 您需要一个数字钱包和 Twitter 账号。
            </Typography>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              2. 如您实在喜欢，但不愿购买；开图后<strong>直接右键保存即可！</strong>
            </Typography>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              3. 如您投机倒把，结果最后赔惨了，<strong>请不要出口即国粹！</strong>我们为您提供如下解决方案：
            </Typography>
            <Typography style={{ marginBottom: 5, fontSize: 20,alignItems:"center",textAlign:"center" }}variant="body2">
            
             <strong><a 
              href="https://peisong.meituan.com/rider" 
              rel="noreferrer"
              target="_blank"
              style={{borderBottom: "2px dashed",margin:"1%"}}>【 办法1 】</a></strong>
              <strong><a 
              href="http://www.25z.cn/job/baoming.asp" 
              rel="noreferrer"
              target="_blank" 
              style={{borderBottom: "2px dashed",margin:"1%"}}>【 办法2 】</a></strong>
              （ 我们相信，假以时日，您定能东山再起！）
            </Typography>
            <Typography style={{ marginBottom: 5, fontSize: 20,alignItems:"center",textAlign:"center" }}variant="body2">
           
            </Typography>

          </AccordionDetails>
          </Accordion>


       

          <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontSize: 22 }}>惊喜？？？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              你瞧瞧，又浪费一秒钟！
            </Typography>
            <Typography style={{ marginBottom: 5, fontSize: 20 }}variant="body2">
              都这么便宜了，确定不mint一个？
            </Typography>
          </AccordionDetails>
          </Accordion>
          
      </Content>
    </Container>
  )
}
export default QA
