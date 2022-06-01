import styled from "styled-components";
import Link from 'next/link';
import { padWidth } from "../utils";
import Container from "./Container";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";



const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: ${padWidth}) {
    flex-direction: column;
    }
`
const StyledLink = styled.a`
    padding: 20px;
`
const Button = styled.div`
    display: flex;
    border-radius: 20%;
    border: 2px solid #000;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: ${padWidth}) {
        margin-Top: 15px;
        justify-content: center;
    }
`

const Heading = styled.h1`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: ${padWidth}) {
        margin-bottom: 10px;
        flex-wrap: wrap;
        justify-content: center;
      }
`



const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <Container
    style={{
        background: "#b1c1de",
      }}>
        
        <Head>
            
                <Heading style={{ fontSize: 35}}>
                <img
                style={{ width: 100 , top:10}}
                src="/if_logo.png"
                />
                    IF CLUB OFFICIAL</Heading>
            <div>
                <Link href=" /" passHref>
                    <StyledLink style={{fontSize: 20}}>主页</StyledLink>
                </Link>
                <Link href=" /roadmap" passHref>
                    <StyledLink style={{fontSize: 20}}>路线图</StyledLink>
                </Link>
                {/* <Link href=" /faq" passHref>
                    <StyledLink style={{fontSize: 20}}>FAQ</StyledLink>
                </Link> */}
                <Link href=" /about" passHref>
                    <StyledLink style={{fontSize: 20}}>关于我们</StyledLink>
                </Link>  
                     
            </div>
            <div>
            <Button style={{width:60,height:30,cursor: "pointer",}} onClick={() => {
              setOpen(true);
            }}>
                English 
            </Button>
            </div>
            
        </Head>
        <Dialog open={open} style={{ textAlign: "left"}} >
        <Typography
            variant="h4"
            style={{ textAlign: "left",color:'grey',margin:"5%"}}
          >
            The English version will be developed when we have time. 
            Until then, please consider using the translator.
          </Typography>
          <Typography
            variant="h5"
            style={{ textAlign: "right",color:'grey',margin:"5%"}}
          >
           -- IF CLUB OFFICIAL
          </Typography>
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
            style={{
            textAlign: "center",
            color:"grey",
            width:"50px",
            height:"50px",
            alignSelf:"center",
            fontSize:"15"
            }}
          >
           OK
          </IconButton>
        </Dialog>
    </Container>
    
  )
}
export default Navbar