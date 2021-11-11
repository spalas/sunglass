import { Container, Grid, List, ListItemText, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {

    return (
        <footer>
            <Container>
                <Grid container spacing={3} sx={{ my: 3 }}>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ mt: 4 }}>
                            <ListItemText style={{ fontWeight: 400, fontSize: 18, color: "#A6ED8E", mb: 1 }}>Our Address</ListItemText>
                            <ListItemText>Eyes check up</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Treatment of your eyes</ListItemText>


                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: "#A6ED8E", mb: 1 }}>Services</ListItemText>

                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Treatment </ListItemText>
                            <ListItemText>Eyes check</ListItemText>


                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: "#A6ED8E", mb: 1 }}>Eyes lens</ListItemText>

                            <ListItemText>Treatment of eyes we have special machine</ListItemText>
                            <ListItemText>Sitting your lens</ListItemText>
                            <ListItemText>With special</ListItemText>

                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: "#A6ED8E", mb: 1 }}>Our Address</ListItemText>
                            <ListItemText>London</ListItemText>
                            <ListItemText>Main city</ListItemText>
                        </List>
                        <Typography>Call Now</Typography>
                        <Typography>+025235698</Typography>


                    </Grid>
                </Grid>
                <Typography sx={{ textAlign: 'center', py: 4 }} variant="subtitle2">Copyright &copy; {new Date().getFullYear()} All Rights Reserved</Typography>
            </Container>
        </footer>
    );
};

export default Footer;