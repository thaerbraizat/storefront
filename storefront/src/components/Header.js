import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";

export default function Header() {
  const displayDesktop = () => {

    return <Toolbar>
         <img style={{maxWidth:160 , maxHeight:100}} src="https://cdna.artstation.com/p/assets/images/images/003/123/712/large/marcos-carvalho-juugernaut11.jpg?1469994551" alt="logo"  />
           <b> juggernaut Store </b>
         </Toolbar>;
  };

  return (
    <header>
      <AppBar position="static">{displayDesktop()}</AppBar>
    </header>
  );
}