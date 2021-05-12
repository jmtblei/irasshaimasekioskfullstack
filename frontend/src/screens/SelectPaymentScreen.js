import React, { useContext } from 'react';
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@material-ui/core";
import { useStyles } from "../styles";
import { setPaymentType } from "../context/Actions";
import { Store } from "../context/Store";

export default function SelectPaymentScreen(props) {
    const styles = useStyles();
    const { dispatch } = useContext(Store);

    const selectHandler = (paymentType) => {
        setPaymentType(dispatch, paymentType);
        if (paymentType === "Pay here") {
          props.history.push("/payment");
        } else {
          props.history.push("/complete");
        }
    };

    return (
        <Box className={[styles.root, styles.pink]}>
            <Box className={[styles.main, styles.center]}>
                <Box className={styles.centerRow}>
                    <img 
                        src="/images/neko.png"
                        alt="Food Order"
                        className={styles.neko}
                    ></img>
                    <Typography
                        gutterBottom
                        variant="h2"
                        component="h2"
                    >
                    Select payment type
                    </Typography>
                    <img 
                        src="/images/neko.png"
                        alt="Food Order"
                        className={styles.nekoflip}
                    ></img>
                </Box>
                <Box className={styles.cards}>
                <Card className={[styles.card, styles.space]}>
                    <CardActionArea onClick={() => selectHandler("Pay here")}>
                    <CardMedia
                        component="img"
                        alt="Pay here"
                        image="/images/payhere.png"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h4"
                            color="primary"
                            component="h4"
                        >
                        PAY HERE
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={[styles.card, styles.space]}>
                    <CardActionArea onClick={() => selectHandler("At counter")}>
                    <CardMedia
                        component="img"
                        alt="At counter"
                        image="/images/cashier.png"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h4"
                            color="primary"
                            component="p"
                        >
                        AT COUNTER
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                </Box>
            </Box>
        </Box>
    )
}
