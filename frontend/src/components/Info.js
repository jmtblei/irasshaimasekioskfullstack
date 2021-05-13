import React, { useState } from "react";
import { 
    Box, 
    Button,
    Typography, 
    IconButton,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    DialogContentText
} from "@material-ui/core";
import { 
    Help, 
    GitHub, 
    LinkedIn, 
    Web, 
    Queue,
    SupervisorAccount,
} from "@material-ui/icons";
import { useStyles } from "../styles";

export default function Info() {
    const styles = useStyles();
    const [isOpen, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box className={[styles.crimson, styles.betweenPad]}>
            <IconButton className={styles.infoButton} onClick={handleClickOpen}>
                <Help />
            </IconButton>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" className={styles.crimson}>{"About"}</DialogTitle >
                <DialogContent className={styles.aijiro}>
                <DialogContentText className={styles.aijiro}>
                    Irasshaimase! (いらっしゃる! meaning "Welcome" or "Please come in") is a Japanese honorific expression for greeting or welcoming someone. <br />
                    <br />
                    This is a demo for a self-checkout kiosk app intended for restaurant owners to be used by patrons and employees. Patrons can place and pay for food orders (Note: this app isn't connected to a pay service and doesn't accept payment information; it's features is only mimiced). Restaurant and front-of-house employees may view/cancel/deliver orders through an admin screen and display a queue for backlogged/fulfilled orders.
                </DialogContentText>
                <Typography id="alert-dialog-description">
                    <div>
                    <h4>Contributors:</h4>
                    <a
                        href="https://github.com/jmtblei"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconButton
                            aria-label="github"
                            className={styles.redButton}
                        >
                        <GitHub />
                        </IconButton>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jmtblei/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconButton
                            aria-label="linkedin"
                            className={styles.redButton}
                        >
                        <LinkedIn />
                        </IconButton>
                    </a>
                    <a
                        href="https://bensonlei.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconButton
                            aria-label="website"
                            className={styles.redButton}
                        >
                        <Web />
                        </IconButton>
                    </a>
                    <br />
                    <p>
                        <b>Benson Lei</b> | Software Engineer &copy; 2021
                    </p>
                    </div>
                </Typography>
                </DialogContent>
                <DialogActions className={styles.crimson}>
                <Button onClick={handleClose} className={styles.redButton}>
                    Close
                </Button>
                </DialogActions>
            </Dialog>
            <Box>
                <a
                    href="https://irasshaimase-demo.herokuapp.com/queue"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconButton
                        aria-label="queue"
                        className={styles.infoButton}
                    >
                    <Queue />
                    </IconButton>
                </a>
                <a
                    href="https://irasshaimase-demo.herokuapp.com/admin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconButton
                        aria-label="admin"
                        className={styles.infoButton}
                    >
                    <SupervisorAccount />
                    </IconButton>
                </a>
            </Box>
        </Box>
    );
}
