import React, { useContext, useEffect } from 'react';
import {
    Box,
    Button,
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Helmet } from "react-helmet";
import { useStyles } from "../styles";
import axios from "axios";
import { Store } from "../context/Store";
import { listOrders } from "../context/Actions";

export default function AdminScreen() {
  const styles = useStyles();
  const { state, dispatch } = useContext(Store);
  const { orders, loading, error } = state.orderList;
  
  useEffect(() => {
    listOrders(dispatch);
  }, []);

  const setOrderStateHandler = async (order, action) => {
    try {
      await axios.put("/api/orders/" + order._id, {
        action: action,
      });
      listOrders(dispatch);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Box className={[styles.root, styles.pink]}>
      <Helmet>
        <title>Admin Orders</title>
      </Helmet>

      <Box className={[styles.main, styles.space]}>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <TableContainer component={Paper} className={styles.aijiro}>
            <Table aria-label="Orders">
              <TableHead>
                <TableRow>
                  <TableCell>Order Number</TableCell>
                  <TableCell align="right">Price&nbsp;($)</TableCell>
                  <TableCell align="right">Count</TableCell>
                  <TableCell align="right">Items</TableCell>
                  <TableCell align="right">Type</TableCell>
                  <TableCell align="right">Payment</TableCell>
                  <TableCell align="right">State</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.name}>
                    <TableCell component="th" scope="row">
                      {order.number}
                    </TableCell>
                    <TableCell align="right">{order.totalPrice}</TableCell>
                    <TableCell align="right">
                      {order.orderItems.length}
                    </TableCell>
                    <TableCell align="right">
                      {order.orderItems.map((item) => (
                        <Box>
                          {item.name} x {item.quantity}
                        </Box>
                      ))}
                    </TableCell>
                    <TableCell align="right">{order.orderType}</TableCell>
                    <TableCell align="right">{order.paymentType}</TableCell>
                    <TableCell align="right">
                      {order.inProgress
                        ? "In Progress"
                        : order.isReady
                        ? "Ready"
                        : order.isDelivered
                        ? "Delivered"
                        : "Unknown"}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() => setOrderStateHandler(order, "ready")}
                        className={styles.greenButton}
                      >
                        Ready
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => setOrderStateHandler(order, "cancel")}
                        className={styles.redButton}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => setOrderStateHandler(order, "deliver")}
                        className={styles.greenButton}
                      >
                        Deliver
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Box>
  );
}
