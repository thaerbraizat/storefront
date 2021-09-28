import React from 'react'
import { Button, Link } from '@material-ui/core';
import {connect} from 'react-redux';
import {switchActive, reset} from '../store/checkActiveCat';
import { CardActions, Typography, Card, CardContent } from "@material-ui/core";
import {  useDispatch } from 'react-redux'; 
import { getRemoteData } from '../store/actions'
import { getDotaData } from '../store/actions'



function Categories(props) {
    console.log(props.counter);

    const dispatch = useDispatch();
    return (
        <>

            <h5 className="MuiTypography-root MuiTypography-h5">Browse our Categories</h5>
            <Link
                component="button"
                variant="body2"
                onClick={()=>props.switchActive("ELECTRONICS")}

            >
                    <Card sx={{ maxWidth: 345 }}>
                    {/* <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg" /> */}
                    <img src="https://image.shutterstock.com/image-illustration/set-small-kitchen-home-appliances-260nw-1128456290.jpg" alt="food" width="300" height="300" />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        ELECTRONICS
                        </Typography>
                        <Typography variant="body2" color="primary">
                            List of best ELECTRONICS in jordan
                        </Typography>
                    </CardContent>
                    <CardActions>
                   <Button onClick={()=>dispatch(getRemoteData())}>show products</Button>
                    </CardActions>
                </Card>
            </Link>
            &nbsp;&nbsp;|| &nbsp;&nbsp;
            <Link
                component="button"
                variant="body2"
                onClick={()=>props.switchActive("FOOD")}
            >
               <Card sx={{ maxWidth: 345 }}>
                    {/* <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg" /> */}
                    <img src="https://www.programmableweb.com/sites/default/files/styles/facebook_scale_width_200/public/Dota%202_0.jpg?itok=39oYPFa3" alt="food" width="300" height="300" />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Dota2
                        </Typography>
                        <Typography variant="body2" color="primary">
                           best dota2 hers
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button onClick={()=>dispatch(getDotaData())}>show products</Button>
                    </CardActions>
                </Card>


 
            </Link>
        </>
    )
}


const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = { switchActive, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

