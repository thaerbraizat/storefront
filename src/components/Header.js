import { AppBar, Toolbar ,Grid,Button} from "@material-ui/core";
import React from "react";
import {connect} from 'react-redux';

function Header(props) {
  console.log('props.countt.count',props.countt.totalVotes);
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
        {/* <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Cart()</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={"Cart()"}
    label={`Cart()`}
    // onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl> */}
           <Button style={{color:'red',fontSize:'25px'}} raised color="accent">
         cart(   {props.countt.totalVotes} )
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
const mapStateToProps = state => ({
  counter: state.counter,
  countt:state.countt
  
});
const mapDispatchToProps = {  };


export default connect(mapStateToProps,mapDispatchToProps)(Header);
