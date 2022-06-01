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
            就是为了结构完整，写个页脚
        </Typography>
        </Head>
        
    </Container>
    
  )
}
export default Footer