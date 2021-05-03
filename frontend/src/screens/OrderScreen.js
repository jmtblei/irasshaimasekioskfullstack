import React, { useContext, useEffect } from 'react';
import { 
    Avatar,
    Box,
    CircularProgress,
    Grid,
    List,
    ListItem, 
} from '@material-ui/core';
import { Alert } from "@material-ui/lab";
import { useStyles } from "../styles";
import { listCategories } from '../context/Actions';
import { Store } from "../context/Store";

export default function OrderScreen() {
    const styles = useStyles();
    const { state, dispatch } = useContext(Store);
    const { categories, loading, error } = state.categoryList;

    useEffect(() => {
        listCategories(dispatch);
    }, [dispatch]);

    return (
        <Box className={styles.root}>
            <Box className={styles.main}>
                <Grid container>
                    <Grid item md={2}>
                        <List>
                            {loading ? (
                                <CircularProgress />
                            ) : error ? (
                                <Alert severity="error">{error}</Alert>
                            ) : (
                                <>
                                    <ListItem button className={styles.sideButtons}>
                                        <>
                                            <img 
                                                src="/images/neko.png"
                                                alt="Food Order"
                                                className={styles.neko}
                                            >
                                            </img>
                                        </>
                                    </ListItem >
                                        {categories.map((category) => (
                                            <ListItem
                                                key={category.name}
                                                button
                                                className={styles.sideButtons}
                                            >
                                                <Avatar alt={category.name} src={category.image} />
                                            </ListItem>
                                        ))}
                                </>
                            )}
                        </List>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
