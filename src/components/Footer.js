import { AppBar, Toolbar,Container,Typography } from "@material-ui/core";
import React from "react";

export default function Footer() {
    
    return (
        <AppBar position="static" color="primary" style={{display:"flex",flexDirection:"column"}}>
          <Container   maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2021 ASAC
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}


