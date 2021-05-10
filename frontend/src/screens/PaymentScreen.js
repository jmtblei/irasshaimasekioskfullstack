import React from 'react';
import { 
    Box, 
    Button, 
    CircularProgress, 
    Typography 
} from '@material-ui/core';
import { useStyles } from '../styles';
export default function CompleteOrderScreen(props) {
  const styles = useStyles();

  return (
    <Box className={[styles.root, styles.pink]}>
      <Box className={[styles.main, styles.center]}>
        <Box className={styles.betweenCenter}>
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
            Please follow the instruction on the PIN pad
            </Typography>
            <img 
                src="/images/neko.png"
                alt="Food Order"
                className={styles.nekoflip}
            ></img>
        </Box>
        <CircularProgress size={150}/>
      </Box>
      <Box className={[styles.center, styles.space]}>
        <Button
          onClick={() => props.history.push('/complete')}
          variant="contained"
          className={styles.largeButton2}
        >
          Complete Order
        </Button>
      </Box>
    </Box>
  );
}
