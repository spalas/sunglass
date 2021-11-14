import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

import { Container, Typography } from '@mui/material';

import Navigation from '../Navigation/Navigation';
import SingleProduct from '../SingleProduct/SingleProduct';



const Explore = () => {




    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://fast-gorge-58002.herokuapp.com/allitems')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    console.log(items)

    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{ flexGrow: 1 }}>


                <Typography sx={{ my: 5 }} variant="h3" gutterBottom component="div">
                    Our products
                </Typography>
                <Typography sx={{ my: 5 }} variant="h6" gutterBottom component="div">
                    You can find here all  type Sunglass
                </Typography>
                <Grid container spacing={2}>

                    {
                        items?.map(item => <SingleProduct




                            key={item._id}
                            item={item}


                        ></SingleProduct>)
                    }

                </Grid>
            </Container>

        </div>
    );
};

export default Explore;