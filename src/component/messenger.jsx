import React from "react";
import LoginDialog from "./Account/LoginDialog";
import ChatDialog from "./Chat/ChatDialog";
import { AppBar, Toolbar, styled, Box } from "@mui/material";

const Header = styled(AppBar)`
  height: 220px;
  box-shadow: none;
  background: #00bfa5;
`;
const Box1 = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;

const massenger = () => {
  return (
    <Box1>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      <LoginDialog />
    </Box1>
  );
};

export default massenger;
