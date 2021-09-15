import React, { useEffect, useState } from 'react';
import { 
    Box, 
    Button, 
    CircularProgress, 
    Typography 
} from "@material-ui/core";
import { Done } from "@material-ui/icons";
import { useStyles } from "../styles";

export default function CompleteOrderScreen(props) {
  const styles = useStyles();

  const [payment, setPayment] = useState(false);

  useEffect(() => {
    const paid = setTimeout(() => setPayment(true), 3000);
    return () => clearTimeout(paid)
  }, [])

  return (
    <Box className={[styles.root, styles.pink]}>
      <Box className={[styles.main, styles.center]}>
        <Box className={styles.betweenCenter}>
            <img 
                src="/images/neko.png"
                alt="Food Order"
                className={styles.neko}
            ></img>
            {!payment?
            <Typography
                gutterBottom
                variant="h3"
                component="h3"
            >
            Please follow the instruction on the PIN pad
            </Typography>
            :
            <Typography
                gutterBottom
                variant="h3"
                component="h3"
            >
            Payment fulfilled!
            <br />
            Please remove card and continue
            </Typography>
            }
            <img 
                src="/images/neko.png"
                alt="Food Order"
                className={styles.nekoflip}
            ></img>
        </Box>
        {!payment ? 
        <CircularProgress size={150}/>
        :
        <Done className={styles.done}/>
        }
      </Box>
      <Box className={[styles.center, styles.space]}>
        {payment ? 
        <Button
          onClick={() => props.history.push("/complete")}
          variant="contained"
          className={styles.largeButton2}
        >
          Complete Order
        </Button>
        :
        null
        }
      </Box>
    </Box>
  );
}
