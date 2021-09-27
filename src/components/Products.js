import React from 'react'
import { Button, CardActions, Typography, Card, CardContent } from "@material-ui/core";
import { connect } from 'react-redux';
import { switchActive, reset } from '../store/checkActiveCat';
import { add } from '../store/cart';


function Products(props) {
    console.log("'proooooooops", props.counter.candidates[0].active);
    console.log("'proooooooops", props.counter.candidates[1].active);
    return (
        <>
            {props.counter.candidates[0].active &&
                <><Card sx={{ maxWidth: 345 }}>
                    {/* <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg" /> */}
                    <img src="https://cdn.shopify.com/s/files/1/1885/2639/articles/How_to_dispose_of_small_electrical_appliance_BLOG_feature_image_1112x.jpg?v=1583746572" alt="food" width="300" height="300" />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard1
                        </Typography>
                        <Typography variant="body2" color="primary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small"  onClick={()=>props.add('Lizard1')}>Add to cart</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>


                    <Card sx={{ maxWidth: 200 }}>
                        {/* <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg" /> */}
                        <img src="https://images.philips.com/is/image/PhilipsConsumer/55PUT6654_56-IMS-en_AE?$jpglarge$&wid=1250" alt="food" width="300" height="300" />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard2
                            </Typography>
                            <Typography variant="body2" color="primary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small"  onClick={()=>props.add('Lizard2')}>Add to cart</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card></>

            }

            {props.counter.candidates[1].active && 
                <><Card sx={{ maxWidth: 200 }}>
                    {/* <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg" /> */}
                    <img src="https://img.theculturetrip.com/wp-content/uploads/2017/03/pic_8150_bat.jpg" alt="food" width="300" height="300" />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard3
                        </Typography>
                        <Typography variant="body2" color="primary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small"  onClick={()=>props.add('Lizard3')}>Add to cart</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                 
                </Card>


                    <Card sx={{ maxWidth: 345 }}>
                        {/* <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg" /> */}
                        <img src="https://image.shutterstock.com/image-photo/arabic-food-sheep-nick-rice-260nw-1834623553.jpg" alt="food" width="300" height="300" />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard4
                            </Typography>
                            <Typography variant="body2" color="primary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"  onClick={()=>props.add('Lizard4')}>Add to cart</Button>
                        
                            {console.log('wwwwwwwwwwwwwwwww',props.countt.cartArr)}
                            <Button size="small">Learn More</Button>
                        </CardActions>
                       
                    </Card></>

            }

        </>
    )
}
const mapStateToProps = state => ({
    counter: state.counter,
    countt:state.countt
    
});

const mapDispatchToProps = { switchActive,add, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Products);





