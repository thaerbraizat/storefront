import React from 'react'
import { Button, CardActions, Typography, Card, CardContent,Grid } from "@material-ui/core";
import { connect } from 'react-redux';
import { switchActive, reset } from '../store/checkActiveCat';
import { add } from '../store/cart';


function Products(props) {
    console.log("'proooooooops", props.counter.candidates[0].active);
    console.log("'proooooooops", props.counter.candidates[1].active);
    console.log("'teeeeeeeeeeeeeeeeeeeeeeeeees", props.todos[1]);

    return (
        <>
            {props.counter.candidates[0].active &&
                <>

                    {props.todos[0] && props.todos[0].map((item, idx) => {
                        return (
                            <Grid container spacing={4} 
                     
                             key={idx}>
                                <Grid item xs={2} md={3}>
                                <Card sx={{ maxWidth: 345 }}>

                                    <img src="https://cdn.shopify.com/s/files/1/1885/2639/articles/How_to_dispose_of_small_electrical_appliance_BLOG_feature_image_1112x.jpg?v=1583746572" alt="food" width="300" height="300" />

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.text}
                                        </Typography>
                                        <Typography variant="body2" color="primary">
                                            {item.assignee}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => props.add(`${item.text}`)}>Add to cart</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                                </Grid>
                            </Grid>
                               
                            )
                    })}


                </>

            }

            {props.counter.candidates[1].active &&
                <>

                    {props.todos[1] && props.todos[1].map((item, idx) => {
                        return (
                            <div key={idx}>
                                <Card sx={{ maxWidth: 345 }}>

                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYYMz88V964xIcOZdEy7B-ptIW8WRjd25jg&usqp=CAU" alt="food" width="300" height="300" />

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        {item.localized_name}
                                        </Typography>
                                        <Typography variant="body2" color="primary">
                                        {item.attack_type}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => props.add(`${item.localized_name}`)}>Add to cart</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </div>)
                    })}
               </>    
             }


        </>


    )
}
const mapStateToProps = state => ({
    counter: state.counter,
    countt: state.countt,
    todos: state.todos

});

const mapDispatchToProps = { switchActive, add, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Products);





