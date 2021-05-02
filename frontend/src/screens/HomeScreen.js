import React from 'react';
import {
    Box,
    Card,
    CardActionArea,
    Typography
} from "@material-ui/core";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import { useStyles } from "../styles";

import Logo from "../components/Logo";

export default function HomeScreen() {
    const styles = useStyles();
    return (
        <Card>
            <CardActionArea>
                <Box className={[styles.root, styles.pink]}>    
                    <Box className={[styles.main, styles.center]}>
                        <Typography
                            component="h3"
                            variant="h3"
                        >
                            Irasshaimase! <br />
                            (いらっしゃいませ！)
                        </Typography>
                        <Typography
                            component="h2"
                            variant="h2"
                        >
                            Order <br />
                            & Pay <br />
                            Here
                        </Typography>
                        <TouchAppIcon fontSize="large"></TouchAppIcon>
                    </Box>
                    <Box className={[styles.center, styles.crimson]}>
                        <Logo large/>
                        <Typography
                            component="h5"
                            variant="h5"
                        >
                            TOUCH TO START
                        </Typography>
                    </Box>
                </Box>
            </CardActionArea>
        </Card>
    )
}