import React from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../consonant/data";
import { GoogleLogin } from "@react-oauth/google";
const dialogStyled = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "none",
};

const Comp = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0px 56px 56px;
`;
const QRCode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;
const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 20px;
  }
`;
const LoginDialog = () => {
  const LogginSuccess = () => {};
  const LogginError = () => {};

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyled }}>
      <Comp>
        <Container>
          <Title>To Use WhatsApp On Your computer:</Title>

          <StyledList>
            <ListItem>1. Open WhatsApp On Your Phone</ListItem>
            <ListItem>2. Tap Menu Setting And Select WhatsApp Web</ListItem>
            <ListItem>
              3. Point Your Phone To This Screen To Capture This QR
            </ListItem>
          </StyledList>
        </Container>
        <Box styled={{position: "relative"}}>
          <QRCode src={qrCodeImage} alt="qr code" />
          <Box styled={{position: "absolute",top:"50%", transform:'translateX(25%)'}}>
            <GoogleLogin onSuccess={LogginSuccess} onError={LogginError} />
          </Box>
        </Box>
      </Comp>
    </Dialog>
  );
};

export default LoginDialog;
