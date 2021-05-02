import React from 'react';
import {
    Typography,
} from "@material-ui/core";
import { useStyles } from "../styles";

export default function Bottom() {
    const styles = useStyles();
    return (
        <>
            <img 
                src="/images/neko.png"
                alt="Food Order"
                className={styles.neko}
            >
            </img>
            <Typography
                component="h5"
                variant="h5"
            >
                TOUCH TO START
            </Typography>
            <img 
                src="/images/neko.png"
                alt="Food Order"
                className={[styles.nekoflip]}
            >
            </img>
        </>
    );
}
