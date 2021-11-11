import React from 'react';
import Grid from '@mui/material/Grid';
import blog from '../../images/blogs.png'
import blog1 from '../../images/blogs2.png'
import blog2 from '../../images/blog2.png'
import { Button, Typography, Container } from '@mui/material';
import { borderRadius, Box } from '@mui/system';

const Blogs = () => {
    return (
        <Container sx={{ flexGrow: 1, my: 5 }}>
            <Typography variant='h2' sx={{ color: "#161E54", my: 3, fontWeight: 500, }}>

                Our Blogs <br />
                Always with you.
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}  >
                    <Box>
                        <Typography variant='h2' sx={{ color: "#161E54" }}>

                            Your Style <br />
                            Its yours.
                        </Typography>
                        <Typography variant='h6' sx={{ fontWeight: 200, fontSize: 18, color: '#40E0D0', my: 3 }}>
                            This is  time  for your, Change to get more benifit <br />and free for eyes check up and get the eye glasses  .
                        </Typography>
                        <Typography variant='h6' sx={{ fontWeight: 300, fontSize: 18, color: '#AA14F0', my: 3 }}>
                            This is  time  for your, Change to get more benifit <br />and free for eyes check up and get the eye glasses  .
                        </Typography>
                        <Typography variant='h1' sx={{ color: "#161E54" }}>

                            Always care  <br />
                            Your choose
                            .
                        </Typography>
                        <Button variant="contained" style={{ background: '#40E0D0', }}> SEE more products</Button>

                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <img style={{ width: 'auto' }} src={blog2} alt="" />
                </Grid>
                <Grid item xs={12} md={6} >
                    <img style={{ width: '90%', borderRadius: "50%" }} src={blog1} alt="" />
                </Grid>
                <Grid item xs={12} md={6} >
                    <img style={{ width: '100%', borderRadius: "25%" }} src={blog} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Blogs;