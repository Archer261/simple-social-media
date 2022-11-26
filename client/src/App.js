import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { useDispatch } from "react-redux";

import { getPosts } from './actions/posts'
import image3 from './images/Joe-40-v2.jpg';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';



function App() {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (

        <Container maxWidth='lg'>
            <AppBar className={classes.appbar} position="static" color="inherit">

                <Typography className={classes.heading} variant="h2" align='center'>Social</Typography>
                <img className={classes.image} src={image3} alt="image3" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing='4'>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>

    )
}

export default App;