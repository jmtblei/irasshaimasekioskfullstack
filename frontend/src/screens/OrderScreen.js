import React, { useContext, useEffect, useState } from 'react';
import { 
    Avatar,
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CircularProgress,
    Dialog,
    DialogTitle,
    Grid,
    List,
    ListItem, 
    TextField,
    Typography,
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { useStyles } from "../styles";
import { 
    listCategories, 
    listProducts,
    addToOrder,
    removeFromOrder,
    clearOrder,
} from "../context/Actions";
import { Store } from "../context/Store";

export default function OrderScreen(props) {
    const styles = useStyles();
    const { state, dispatch } = useContext(Store);
    const { categories, loading, error } = state.categoryList;
    const {
        products,
        loading: loadingProducts,
        error: errorProducts,
    } = state.productList;
    const {
        orderItems,
        itemsCount,
        totalPrice,
        taxPrice,
        orderType,
    } = state.order;

    const [categoryName, setCategoryName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [product, setProduct] = useState({});

    useEffect(() => {
        if (!categories) {
            listCategories(dispatch);
        } else {
            listProducts(dispatch, categoryName);
        };
    }, [dispatch, categories, categoryName]);

    const closeHandler = () => {
        setIsOpen(false);
    };

    const productClickHandler = (p) => {
        setProduct(p);
        setIsOpen(true);
    };

    const addToOrderHandler = () => {
        addToOrder(dispatch, { ...product, quantity });
        setIsOpen(false);
    };

    const cancelOrRemoveFromOrder = () => {
        removeFromOrder(dispatch, product);
        setIsOpen(false);
    };

    const categoryHandler = (name) => {
        setCategoryName(name);
        listProducts(dispatch, categoryName);
    };

    const previewOrderHandler = () => {
        props.history.push("/review");
    };

    return (
        <Box className={[styles.root, styles.pink]}>
            <Box className={styles.main}>
                <Dialog
                    onClose={closeHandler}
                    aria-labelledby="max-width-dialog-title"
                    open={isOpen}
                    fullWidth={true}
                    maxWidth="sm"
                >
                <DialogTitle className={[styles.center, styles.aijiro]}>
                    Add {product.name}
                </DialogTitle>
                <Box className={[styles.row, styles.center, styles.aijiro]}>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={quantity === 1}
                        onClick={(e) => quantity > 1 && setQuantity(quantity - 1)}
                        className={styles.incrementButton}
                    >
                    <Remove />
                    </Button>
                    <TextField
                        InputProps={{
                            bar: true,
                            inputProps: {
                            className: styles.largeInput,
                            },
                        }}
                        type="number"
                        min={1}
                        value={quantity}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={(e) => setQuantity(quantity + 1)}
                        className={styles.incrementButton}
                    >
                    <Add />
                    </Button>
                </Box>
                <Box className={[styles.row, styles.around, styles.aijiro]}>
                    <Button
                        onClick={cancelOrRemoveFromOrder}
                        variant="contained"
                        size="large"
                        className={styles.largeButton}
                    >
                    {orderItems.find((x) => x.name === product.name)
                        ? "Remove From Order"
                        : "Cancel"}
                    </Button>
                    <Button
                        onClick={addToOrderHandler}
                        variant="contained"
                        size="large"
                        className={styles.largeButton}
                    >
                    Add To Order
                    </Button>
                </Box>
                </Dialog>
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
                        {categoryName || "Main Menu"}
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
                                        onClick={() => productClickHandler(product)}
                                    >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt={product.name}
                                                image={product.image}
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="body2"
                                                    color="secondary"
                                                    component="p"
                                                >
                                                {product.name}
                                                </Typography>
                                                <Box>
                                                <Typography
                                                    gutterBottom
                                                    variant="body2"
                                                    color="textPrimary"
                                                    component="p"
                                                >
                                                    {product.calorie} Cal
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="secondary"
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
            <Box>
                <Box>
                    <Box className={[styles.space, styles.between, styles.aijiro]}>
                        <span>My Order - {orderType}</span> 
                        <span>Items: {itemsCount}</span>
                        <span>Tax: ${taxPrice}</span>
                        <span>Total: ${totalPrice}</span>
                    </Box>
                    <Box className={[styles.row, styles.around, styles.aijiro]}>
                        <Button
                            onClick={() => {
                                clearOrder(dispatch);
                                props.history.push("/");
                            }}
                            variant="contained"
                            className={styles.largeButton}
                        >
                        Cancel Order
                        </Button>
                        <Button
                            onClick={previewOrderHandler}
                            disabled={orderItems.length === 0}
                            variant="contained"
                            className={styles.largeButton}
                        >
                        Review
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
