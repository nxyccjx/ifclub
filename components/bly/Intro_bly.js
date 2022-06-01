import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Container from "../Container";
import _ from 'lodash'




const Content = styled.div`
max-width: 840px;
margin: 5% auto 5% auto;
strong{
  color:purple;
}
`;


const GalleryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 840px;
  max-height: 840px;
  overflow: hidden;
  margin: 5% auto 0 auto;
`;
const GalleryItem = styled.div`
  width: 120px;
  margin: 10px;
  transition: all 0.2s ease;
  will-change: transform;
  position: relative;
  z-index: 10;
  img {
    width: 100%;
    height: auto;
  }
  :hover {
    transform: scale(1.2);
  }
`;

const arts = [
  "/images/demo_1.png",
  "/images/demo_2.png",
  "/images/demo_3.png",
  "/images/demo_4.png",
  "/images/demo_5.png",
  "/images/demo_8.png",
  "/images/demo_10.png",
  "/images/demo_7.png",
  "/images/demo_9.png",
  "/images/demo_6.png",
  "/images/demo_11.png",
  "/images/demo_12.png",
];



function Gallery() {
  return (
    <Container
      style={{
        background: "#fff",
      }}
    >
      <Typography
        style={{ textAlign: "center", marginTop: "5%" }}
        variant="h3"
        gutterBottom
      >
        Buddha-Like Youths（BLY）
      </Typography>

      <Typography
        style={{ textAlign: "center", marginTop: "3%" }}
        variant="h4"
        gutterBottom
      >
        真实作品展示
      </Typography>

      <GalleryList style={{marginTop: '3%', marginBottom: "5%" }}>
        {arts.map((art, idx) => {
          return (
            <GalleryItem key={idx}>
              <img src={art} alt="国产良心作品展示" />
            </GalleryItem>
          );
        })}
      </GalleryList>

      <Content>
      <Typography
        style={{ textAlign: "center", marginTop: "3%" }}
        variant="h4"
        gutterBottom
      >
        项目介绍
      </Typography>

      <Typography style={{textAlign: "center", marginBottom: 20, fontSize: 20}} variant="body1" gutterBottom>
         你这辈子有没有为别人拼过命？有！熬夜加班和早起上班的时候！
      </Typography>
      <Typography style={{textAlign: "center", marginBottom: 20, fontSize: 20}} variant="body1" gutterBottom>
         你这辈子有没有... 算了，编不出来了！
      </Typography>
      <Typography style={{textAlign: "center", marginBottom: 20, fontSize: 23}} variant="body1" gutterBottom>
         <strong>但是！一套有态度的NFT，我们做出来了！</strong>
      </Typography>
      <Typography style={{textAlign: "center", marginBottom: 50, fontSize: 20}} variant="body1" gutterBottom>
         佛系青年！【Buddha-Like Youths】，简称：BLY， 正式上线了！
      </Typography>



        <Typography style={{marginTop:50, textAlign: "center" }} variant="h4" gutterBottom>
          郑重说明
        </Typography>
        <Typography
          style={{ marginBottom: 20, marginTop: 30,fontSize: 20 }}
          variant="body1"
          gutterBottom
        >
          1. 佛系青年 NFT 不佛一点，那就不合适了。我们限量发行
          <strong>2333</strong>张。上面所展示的作品，
          均为实品效果。保证开图时，<strong>所见即所得。</strong>

        </Typography>
        <Typography style={{ marginBottom: 20, fontSize: 20}} variant="body1" gutterBottom>
        2. 此次发行，分为两个阶段。白名单可以先mint，然后进入公开发行阶段。
      </Typography>
      <Typography style={{ marginBottom: 20, fontSize: 20}} variant="body1" gutterBottom>
        3. 白名单用户将以<strong>2.3 Matic</strong>的价格mint，其他用户将以<strong>5.3 Matic</strong>的价格mint。
      </Typography>
      <Typography style={{ marginBottom: 20, fontSize: 20}} variant="body1" gutterBottom>
        4. 进入公开阶段时，白名单也可再次mint。
      </Typography>
      <Typography style={{ marginBottom: 50, fontSize: 20}} variant="body1" gutterBottom>
        5. 未 mint 完成的 NFT 也将会一直锁在合约里。
      </Typography>



      <Typography style={{marginTop:40, marginBottom: 30,textAlign: "center" }} variant="h4" gutterBottom>
          白名单机制
        </Typography>
      <Typography style={{ marginBottom: 20, fontSize: 20}} variant="body1" gutterBottom>
        1. 此次白名单<strong>仅面向</strong>小幽灵【The Flying Ghost】的持有者抽取。每人限mint2个。
      </Typography>
      <Typography style={{ marginBottom: 20, fontSize: 20}} variant="body1" gutterBottom>
        2. 参与方式也是老一套，点赞、转发、@好友。没有Discord，不用做各种任务。我们很佛，卖不出去也没关系。
        具体时间，以Twitter为主吧！
      </Typography>
      <Typography style={{ marginBottom: 20, fontSize: 20}} variant="body1" gutterBottom>
        3. 白名单数量<strong>66个</strong>！牛批吧！没见过吧！试问有谁抽过这么多白！就是要给If Club的精神股东送福利！
      </Typography>
      <Typography style={{ marginBottom: 20, fontSize: 20}} variant="body1" gutterBottom>
        4. 白名单已mint的NFT会保持不可见状态，直至公开阶段。届时，大家可在opensea刷新metadata，稍后便可见原图
      </Typography>
      <Typography style={{fontSize: 20}} variant="body1" gutterBottom>
        注：抽白后，将开启“人工智能”对比钱包地址，非小幽灵持有者的钱包地址，将无法mint哈～还请谅解！
        整理数据可能会耗费一些时间，也请谅解，我们尽快！（手动哭笑emoji）
      </Typography>
      </Content>
    </Container>
  );
}

export default Gallery;
