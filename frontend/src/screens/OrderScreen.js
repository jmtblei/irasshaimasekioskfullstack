import React, { useContext, useEffect, useState } from 'react';
import { 
    Avatar,
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CircularProgress,
    Grid,
    List,
    ListItem, 
    Typography,
} from '@material-ui/core';
import { Alert } from "@material-ui/lab";
import { useStyles } from "../styles";
import { listCategories, listProducts } from '../context/Actions';
import { Store } from "../context/Store";

export default function OrderScreen() {
    const styles = useStyles();
    const { state, dispatch } = useContext(Store);
    const { categories, loading, error } = state.categoryList;
    const {
        products,
        loading: loadingProducts,
        error: errorProducts,
    } = state.productList;
    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        if (!categories) {
            listCategories(dispatch);
        } else {
            listProducts(dispatch, categoryName);
        };
    }, [dispatch, categories, categoryName]);

    const categoryHandler = (name) => {
        setCategoryName(name);
        listProducts(dispatch, categoryName);
    };

    return (
        <Box className={[styles.root, styles.pink]}>
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
                                    <ListItem button 
                                        className={styles.sideButtons}
                                        onClick={() => categoryHandler("")}
                                    >
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
                                                onClick={() => categoryHandler(category.name)}
                                            >
                                                <Avatar alt={category.name} src={category.image} />
                                                {category.name}
                                            </ListItem>
                                        ))}
                                </>
                            )}
                        </List>
                    </Grid>
                    <Grid item md={10}>
                        <Typography
                        gutterBottom
                        className={styles.title}
                        variant="h2"
                        component="h2"
                        >
                        {categoryName || 'Main Menu'}
                        </Typography>

                        <Grid container spacing={1}>
                        {loadingProducts ? (
                            <CircularProgress />
                        ) : errorProducts ? (
                            <Alert severity="error">{errorProducts}</Alert>
                        ) : (
                            products.map((product) => (
                                <Grid item md={6}>
                                    <Card
                                        className={styles.menuCard}
                                    >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt={product.name}
                                                image={product.image}
                                                className={styles.media}
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="body2"
                                                    color="primary"
                                                    component="p"
                                                >
                                                {product.name}
                                                </Typography>
                                                <Box>
                                                <Typography
                                                    gutterBottom
                                                    variant="body2"
                                                    color="secondary"
                                                    component="p"
                                                >
                                                    {product.calorie} Cal
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="primary"
                                                    component="p"
                                                >
                                                    ${product.price}
                                                </Typography>
                                                </Box>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))
                        )}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
