import React from 'react';
import Grid from '@mui/material/Grid';
import bestseller from '../../images/bestoffer.png'
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';


const BestSeller = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6} >
                    <img style={{ width: '100%' }} src={bestseller} alt="" />
                </Grid>
                <Grid item xs={12} md={6}  >
                    <Box>
                        <Typography variant='h2' sx={{ fontWeight: 600, color: "#161E54" }}>

                            30% off <br />
                            Every products .
                        </Typography>
                        <Typography variant='h6' sx={{ fontWeight: 400, fontSize: 18, color: '#0F117A', my: 3 }}>
                            It for vacation plain every sunglass has <br />30% discount from orginal price.
                        </Typography>
                        <Button variant="contained" style={{ background: '#0F117A', mb: 5 }}> SEE more products</Button>

                    </Box>
                </Grid>


            </Grid>
        </Container>
    );
};

export default BestSeller;