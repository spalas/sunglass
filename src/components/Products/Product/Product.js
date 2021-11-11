import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const Product = ({ product }) => {

    const { name, price, descripation, image, } = product

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
                        {descripation}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained">Buy Now</Button>

                </CardActions>
            </Card>

        </Grid>
    );
};

export default Product;