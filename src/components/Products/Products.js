import React from 'react';
import Grid from '@mui/material/Grid';

import { Container, Typography } from '@mui/material';
import Product from './Product/Product';
const products = [
    {
        name: "Man Sunglass",
        price: "90 $",
        descripation: "All type of sunglass available here but we more collection then other all band you find here",
        image: "https://i.ibb.co/Cz0n4hQ/sun66.png"
    },
    {
        name: "Woman Sunglass",
        price: "100 $",
        descripation: "Woman sunglass available here but we more collection then other all band you find here",
        image: "https://i.ibb.co/5F9LzvR/sun64.png"
    },
    {
        name: "Kid sunglass",
        price: "50 $",
        descripation: "Kids for sunglass available here but we more collection then other all band you find here",
        image: "https://i.ibb.co/M9hdK0p/sun61.png"
    },
    {
        name: "Photo flash sunglass",
        price: "115 $",
        descripation: "photoFlash sunglass available here but we more collection then other all band you find here",
        image: "https://i.ibb.co/ctD1v9x/sun65.png"
    },
    {
        name: "glow sunglass",
        price: "125 $",
        descripation: "Glow sunglass available here but we more collection then other all band you find here",
        image: "https://i.ibb.co/k8zKYjf/sun63.png"
    },
    {
        name: "Style sunglass",
        price: "100 $",
        descripation: "Stylize  you can find here sunglass available here but we more collection then other all band you find here",
        image: "https://i.ibb.co/Trkw9rj/sun62.png"
    },
]

const Products = () => {




    return (
        <Container sx={{ flexGrow: 1 }}>


            <Typography sx={{ my: 5 }} variant="h3" gutterBottom component="div">
                Our products
            </Typography>
            <Typography sx={{ my: 5 }} variant="h6" gutterBottom component="div">
                You can find here all  type Sunglass
            </Typography>
            <Grid container spacing={2}>

                {
                    products.map(product => <Product
                        key={product.name}
                        product={product}


                    ></Product>)
                }

            </Grid>
        </Container>
    );
};

export default Products;




