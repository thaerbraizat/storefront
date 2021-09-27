import { AppBar, Toolbar ,Grid,Button} from "@material-ui/core";
import React from "react";

export default function Header() {
  const displayDesktop = () => {

    return <Toolbar>
      <Grid
      justify="space-between" // Add it here :)
      container 
      spacing={24}
    >
         <img style={{maxWidth:160 , maxHeight:100}} src="https://cdna.artstation.com/p/assets/images/images/003/123/712/large/marcos-carvalho-juugernaut11.jpg?1469994551" alt="logo"  />
           <b style={{fontSize:"40px"}}> juggernaut Store </b>

           
      <Grid item>
        <div>
        
          <Button raised color="accent">
            cart()
          </Button>
        </div>
      </Grid>
      </Grid>
         </Toolbar>;
  };

  return (
    <header>
      <AppBar position="static">{displayDesktop()}</AppBar>
    </header>
  );
}