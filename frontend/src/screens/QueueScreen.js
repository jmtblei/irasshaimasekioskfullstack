import React, { useContext, useEffect } from 'react';
import {
  Box,
  CircularProgress,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Helmet } from "react-helmet";
import { useStyles } from "../styles";
import { listQueue } from "../context/Actions";
import { Store } from "../context/Store";

export default function QueueScreen() {
  const styles = useStyles();
  const { state, dispatch } = useContext(Store);
  const { queue, loading, error } = state.queueList;

  useEffect(() => {
    listQueue(dispatch);
  }, [dispatch]);

  return (
    <Box className={[styles.root, styles.aijiro]}>
      <Helmet>
        <title>Queue</title>
      </Helmet>
      <Box className={[styles.main]}>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <Grid container spacing={2} className={styles.space}>
            <Grid item md={6}>
              <Paper className={[styles.pink, styles.queueCards]}>
                    <Typography
                        gutterBottom
                        variant="h3"
                        component="h3"
                        color="primary"
                        className={styles.queueTitle}
                    >
                        Orders In Progress:
                    </Typography>
                <List>
                  {queue.inProgressOrders.map((order) => (
                    <ListItem key={order.number}>
                      <Typography
                        gutterBottom
                        variant="h3"
                        component="h3"
                        color="primary"
                        className={styles.queueNumbers}
                    >
                        {order.number}
                    </Typography>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid item md={6}>
              <Paper className={[styles.pink, styles.queueCards]}>
                    <Typography
                        gutterBottom
                        variant="h3"
                        component="h3"
                        color="primary"
                        className={styles.queueTitle}
                    >
                        Now Serving:
                    </Typography>
                <List>
                  {queue.servingOrders.map((order) => (
                    <ListItem key={order.number}>
                        <Typography
                            gutterBottom
                            variant="h3"
                            component="h3"
                            color="primary"
                            className={styles.queueNumbers}
                        >
                            {order.number}
                        </Typography>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
}
