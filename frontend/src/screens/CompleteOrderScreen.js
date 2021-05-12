import React, { useContext, useEffect } from 'react';
import { 
    Box, 
    Button, 
    CircularProgress, 
    Typography 
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useStyles } from "../styles";
import { createOrder } from "../context/Actions";
import { Store } from "../context/Store";

export default function CompleteOrderScreen(props) {
  const styles = useStyles();
  const { state, dispatch } = useContext(Store);
  const { order } = state;
  const { loading, error, newOrder } = state.orderCreate;

  useEffect(() => {
    if (order.orderItems.length > 0) {
      createOrder(dispatch, order);
    }
  }, [dispatch, order]);

  return (
    <Box className={[styles.root, styles.pink]}>
      <Box className={[styles.main, styles.center]}>
        <Box>
          {loading ? (
            <CircularProgress></CircularProgress>
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <Box>
                <Typography
                    gutterBottom
                    variant="h1"
                    component="h1"
                >
                Thank you!
                </Typography>
                <Typography
                    gutterBottom
                    variant="h3"
                    component="h3"
                >
                Your order has been placed
                </Typography>
                <Box className={styles.betweenCenter}>
                <img 
                    src="/images/neko.png"
                    alt="Food Order"
                    className={styles.neko}
                ></img>
                <Typography
                    gutterBottom
                    variant="h3"
                    component="h3"
                >
                Your order number is {newOrder.number}
                </Typography>
                <img 
                    src="/images/neko.png"
                    alt="Food Order"
                    className={styles.nekoflip}
                ></img>
                </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Box className={[styles.center, styles.space]}>
        <Button
          onClick={() => props.history.push("/")}
          variant="contained"
          color="primary"
          className={styles.largeButton2}
        >
          Return to menu
        </Button>
      </Box>
    </Box>
  );
}
