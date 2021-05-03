import React, { useContext } from 'react';
import { 
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Fade,
    Typography,
} from '@material-ui/core';
import { useStyles } from "../styles";
import { setOrderType } from '../context/Actions';
import { Store } from "../context/Store";

export default function ChooseScreen(props) {
    const styles = useStyles();
    const { dispatch } = useContext(Store);

    const chooseHandler = (orderType) => {
        setOrderType(dispatch, orderType);
        props.history.push("/order");
    };

    return (
        <Fade in={true}>
            <Box className={[styles.root, styles.pink]}>
                <Box className={[styles.main, styles.center]}>
                    <Typography
                        component="h2"
                        variant="h2"
                        gutterBottom
                        className={styles.center}
                    >
                        Where will you be eating today?
                    </Typography>
                    <Box className={styles.cards}>
                        <Card className={[styles.card, styles.space]}>
                            <CardActionArea onClick={() => chooseHandler("Eat in")}>
                                <CardMedia
                                    component="img"
                                    image="/images/eatin.png"
                                    alt="Eat in"
                                    className={styles.media}
                                />
                                    <CardContent>
                                        <Typography
                                            component="h4"
                                            variant="h4"
                                            color="primary"
                                            gutterBottom
                                        >
                                            EAT IN
                                        </Typography>
                                    </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={[styles.card, styles.space]}>
                            <CardActionArea onClick={() => chooseHandler("Take out")}>
                                <CardMedia
                                    component="img"
                                    image="/images/takeout.png"
                                    alt="Take Out"
                                    className={styles.media}
                                />
                                    <CardContent>
                                        <Typography
                                            component="h4"
                                            variant="h4"
                                            color="primary"
                                            gutterBottom
                                        >
                                            TAKE OUT
                                        </Typography>
                                    </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </Fade>
    )
}
