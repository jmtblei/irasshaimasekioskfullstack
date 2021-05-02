import React from 'react';
import {
    Box,
    Card,
    CardActionArea,
    Typography,
} from "@material-ui/core";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import { useStyles } from "../styles";

import Bottom from "../components/Bottom";

export default function HomeScreen(props) {
    const styles = useStyles();
    return (
        <Card>
            <CardActionArea onClick={() => props.history.push("/choose")}>
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
                            component="h1"
                            variant="h1"
                        >
                            Order <br />
                            & Pay <br />
                            Here
                        </Typography>
                        <TouchAppIcon fontSize="large"></TouchAppIcon>
                    </Box>
                    <Box className={[styles.center, styles.crimson]}>
                        <Bottom />
                    </Box>
                </Box>
            </CardActionArea>
        </Card>
    )
}