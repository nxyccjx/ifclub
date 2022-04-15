import styled from "styled-components";
import { padWidth } from "../utils";
import Container from "./Container";
import Typography from "@mui/material/Typography";



const Head = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: ${padWidth}) {
    flex-direction: column;
    }
`

const Footer = () => {
  return (
    <Container
    style={{
        background: "#dcdcdc",
      }}>
        
        <Head>
        <Typography style={{
            margin: "3%",
            fontSize: 24,
          }}>
            <strong>声明：</strong>本站所提供信息均为项目内容展示，不构成任何投资建议！
        </Typography>
        </Head>
        
    </Container>
    
  )
}
export default Footer