import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

import { Container, Typography } from '@mui/material';
import Product from './Product/Product';


const Products = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://fast-gorge-58002.herokuapp.com/allitems')
            .then(res => res.json())
            .then(data => setItems(data.slice(0, 6)))
    }, [])
    console.log(items)




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
                    items?.map(item => <Product
                        key={item._id}
                        item={item}


                    ></Product>)
                }

            </Grid>
        </Container>
    );
};

export default Products;




