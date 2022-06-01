import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import { padWidth } from "../utils";
import Container from "./Container";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Head = styled.div`
  padding: 30px 0;
  position: relative;
`;

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
  const [open, setOpen] = useState(false);
  return (
    <TeamMemberWrapper>
      <Avatar>
        <img src={props.img} alt="" />
      </Avatar>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <div style={{ fontSize: 28, fontWeight: "bold" }}>{props.name}</div>
        <div style={{ marginTop: 10 }}>{props.role}</div>
        <div style={{ marginTop: 5 }}>{props.description}</div>
        <div style={{ marginTop: 5, cursor: 'pointer'}} onClick={() => {
          setOpen(true);
        }}>{props.letter}</div>
      </div>
        <div style={{ marginTop: 20 }}>
          {props.twitterLink && (
            <a href={props.twitterLink} target="_blank" rel="noreferrer">
              <img style={{ width: 30 }} src="/icon/twitter.png" alt="" />
            </a>
          )}
        </div>
        <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <Head>
          <Typography
            variant="h3"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            致各位If Club精神股东的一封信
          </Typography>
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
            style={{
              position: "fixed",
              top: "30px",
              right: "30px",
            }}
          >
            <CloseIcon style={{ fontSize: 40 }} />
          </IconButton>
        </Head>
        <Content>
          <Typography style={{color: "#999",fontSize:22, marginBottom: 20 }}>
            各位已经/即将成为If Club的精神股东，你们好：
          </Typography>
          <Typography style={{color: "#999", marginBottom: 20 }}>
            如果你们还能看到这里，说明是真的支持我们！毕竟这是一个极度隐秘的地方！
          </Typography>
          <Typography style={{color: "#999", marginBottom: 20 }}>
            If Club创立的初衷，就是将想法通过努力去实现。因此在我们学习了相关内容之后，便有了制作一套NFT的想法，
            并付出了行动。我们清楚到认识到自己画工不足，于是小幽灵在一开始就决定要送。
            第二套NFT也是被要求在节假日加班时，突发的想法，想制作一套有态度的NFT。不论我们是否将想表达的态度表示清楚，
            我们之后很可能不会再发行NFT，除非我们有能力可以做出一套有意义的NFT。
          </Typography>
          <Typography style={{color: "#999", marginBottom: 20 }}>
            送小幽灵的过程中，陆续也加了一些人。他们也给出了一些建设性的意见，
            包括如何发行NFT，如何设计NFT玩法，如何拉新、宣传、造势。
            但在我们看来，售罄NFT不是终点，即使卖不出去也真的没关系。
            能够完整的制作一套NFT这件事请本身的意义对我们来讲比较重要。
            说一句比较俗的话，就是我们确实有了从“思想上的巨人”到“行动上的巨人”的改变。
          </Typography>
          <Typography style={{color: "#999", marginBottom: 20 }}>
            我们在日常生活中，总是在不经意间有各种各样的想法，但最后都是脑子里“创业“，然后不了了之。
            If Club创立的意义也在这里！朋友们！精神股东们！如果你们真的有了好想法，就放心迈出第一步，然后才会有第二步。
            重要的是去做，而不是简单的想。
          </Typography>
          <Typography style={{color: "#999", marginBottom: 20 }}>
            我们会持续地在 Web2 + 3 里面折腾，一点一点的把我们心中所想，慢慢实现。
            同时也邀请各位精神股东持续关注我们，见证我们的成长。
            万一这个小团队日后真的牛逼起来了，那就证明各位精神股东的眼光是真的好！
          </Typography>
          <Typography style={{ color: "#999",marginBottom: 20 }}>
            之前有说过不会拉群，是因为不想去操心很多事情。
            然而现在可能要做一些小小的变动，我们打算搞一个VX群。
            也希望各位精神股东能畅所欲言，提出建议；更希望能合理整合精神股东们的资源，
            早日实现大家心中所想。当然，这一切都建立在可实行的基础上。
          </Typography>
          <Typography style={{color: "#999", marginBottom: 20 }}>
          通过这么隐秘的地方，愿意选择进来的精神股东。
          我们相信你是一位高质量股东，一位非常欣赏我们的股东！进群的二维码，就放下面了！
          </Typography>

          <Typography style={{color: "#999", marginBottom: 20 }}>
            群链接会在一段时间后失效，我会不定期更新。
            如果你恰好在失效期间看到这封信，也可私信我(任何社交平台均可)，并请说出暗号“宫廷玉液酒”的下一句。
            对接成功后，我会拉你哦！
          </Typography>
          
          <Typography style={{ color: "#999",marginBottom: 20 }}>
          之后的话，我们确实有一些小想法，但还没有可实行的方案，也有可能我们这个小团队从此一蹶不振。
          各位朋友，敬请期待吧！
          </Typography>
         
          <div
            style={{
              marginTop: 50,
              marginBottom: 40,
              fontSize: 30,
              
              display: "flex",
              alignItems: "right",
              justifyContent: "right",
            }}
          >
            If Club Official 团队{" "}
            <img src="/icons/yaofan.jpg" style={{ width: 40 }} alt="" />
          </div>
        </Content>
      </Dialog>
        
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
            img="/profile/jsgd.jpeg"
            name="IF CLUB 的精神股东们"
            role="来自五湖四海 / 身处各行各业"
            description="你们也是If Club的一员！"
            letter='致精神股东们的一封信'
            
          />
        </TeamWrapper>
        <Typography
        style={{ textAlign: "center" }}
        onClick={() => {
          setOpen(true);
        }}
      > 
      </Typography>
      </Content>
    </Container>
  );
}

export default Team;
