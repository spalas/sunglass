import React from 'react';

import Grid from '@mui/material/Grid';
import bg from '../../images/header.gif'
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';


const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}  >
                    <Box>
                        <Typography variant='h2' sx={{ color: "#161E54", fontWeight: 600 }}>

                            Your Style <br />
                            Its yours.
                        </Typography>
                        <Typography variant='h6' sx={{ fontWeight: 200, fontSize: 18, color: '#40E0D0', my: 3 }}>
                            This is  time  for your, Change to get more benifit <br />and free for eyes check up and get the eye glasses  .
                        </Typography>


                        <Button variant="contained" style={{ background: '#40E0D0', }}> SEE more products</Button>

                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <img style={{ width: '100%' }} src={bg} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;