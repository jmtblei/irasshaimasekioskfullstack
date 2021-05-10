import React, { useContext, useEffect, useState } from 'react';
import { 
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Dialog,
    DialogTitle,
    Grid,
    TextField,
    Typography,
} from '@material-ui/core';
import { Add, Remove } from "@material-ui/icons";
import { useStyles } from "../styles";
import { addToOrder, removeFromOrder } from '../context/Actions';
import { Store } from "../context/Store";

export default function ReviewScreen(props) {
    const styles = useStyles();
    const { state, dispatch } = useContext(Store);
    const {
        orderItems,
        itemsCount,
        totalPrice,
        taxPrice,
        orderType,
    } = state.order;

    const [quantity, setQuantity] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [product, setProduct] = useState({});

    useEffect(() => {}, []);

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
                <Box className={[styles.center, styles.column]}>
                    <img 
                        src="/images/neko.png"
                        alt="Food Order"
                        className={styles.neko}
                    ></img>
                    <Typography
                        gutterBottom
                        className={styles.title}
                        variant="h3"
                        component="h3"
                    >
                        Review Order - {orderType}
                    </Typography>
                    <img 
                        src="/images/neko.png"
                        alt="Food Order"
                        className={styles.nekoflip}
                    ></img>
                </Box>
                <Grid container>
                    {orderItems.map((orderItem) => (
                    <Grid item md={12} key={orderItem.name}>
                        <Card
                            className={styles.card}
                            onClick={() => productClickHandler(orderItem)}
                        >
                            <CardActionArea>
                                <CardContent>
                                    <Box className={[styles.row, styles.betweenCenter]}>
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                color="secondary"
                                                component="h6"
                                            >
                                                {orderItem.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="textPrimary"
                                                component="p"
                                            >
                                                {orderItem.calorie} Cal
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                color="secondary"
                                                component="h6"
                                            >
                                                {orderItem.quantity} x ${orderItem.price}
                                            </Typography>
                                        </Box>
                                        <Button variant="contained" className={styles.editButton}>Edit</Button>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    ))}
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
                                props.history.push(`/order`);
                            }}
                            variant="contained"
                            className={styles.largeButton}
                        >
                        Back
                        </Button>
                        <Button
                            variant="contained"
                            className={styles.largeButton}
                        >
                        Proceed To Checkout
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
