import React, { useContext } from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../consonant/data";
import { GoogleLogin } from "@react-oauth/google";
import { AccountContext } from "../../context/AccountProvider";
import jwt_decode from "jwt-decode";
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
const SignINQR = styled(Box)`
  position: "relative";
`;
const SignIN = styled(Box)`
  position: "absolute";
  top: "50%";
  transform: "translateX(25%)";
`;
const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);

  const LogginSuccess = (res) => {
    // const decoded = jwt_decode(res.credential);
    // console.log(decoded)
  };
  const LogginError = (res) => {
    console.log("login fail ", res);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyled }} hideBackdrop={true}>
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
        <SignINQR>
          <QRCode src={qrCodeImage} alt="qr code" />
          <SignIN>
            <GoogleLogin onSuccess={LogginSuccess} onError={LogginError} />
          </SignIN>
        </SignINQR>
      </Comp>
    </Dialog>
  );
};

export default LoginDialog;
