import { makeStyles } from "@material-ui/core";

//@desc colors
//#780109 japanese maple /crimson
//#D87C63 japonica /pink
//#EBF6F7 indigo white /aijiro
//#D0F0C0 matcha /lime
//#5B8930 moegi onion /jade

export const useStyles = makeStyles((theme) => ({
    //Colors
    pink: {
        backgroundColor: "#D87C63",
        color: "#EBF6F7"
    },
    crimson: {
        backgroundColor: "#780109",
    },
    aijiro: {
        backgroundColor: "#EBF6F7",
    },
    //HomeScreen
    root: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    main: {
        flex: 1,
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        color: "#EBF6F7",
    },
    center: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        textAlign: "center",
    },
    //Logo
    neko: {
        height: 100,
    },
    nekoflip: {
        height: 100,
        transform: "scaleX(-1)",
    },
    //ChooseScreen
    cards: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        margin: 10,
        backgroundColor: "#EBF6F7",
        border: "1px solid #780109",
    },
    space: {
        padding: 10,
    },
    media: {
        width: 200,
    },
    //OrderScreen
    sideButtons: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
}));