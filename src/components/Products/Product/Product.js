import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Product = ({ item }) => {


    const { _id, name, price, description, image } = item

    return (



        <Grid item xs={12} sm={6} md={4}>

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Price :  {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <NavLink style={{ textDecoration: "none" }} to={`/buying/${_id}`}>
                        <Button variant="contained">Buy Now</Button>
                    </NavLink>


                </CardActions>
            </Card>

        </Grid>
    );
};

export default Product;