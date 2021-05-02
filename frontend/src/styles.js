import { makeStyles } from "@material-ui/core";

//@desc colors
//#780109 japanese maple /crimson
//#D87C63 japonica /pink
//#EBF6F7 indigo white /aijiro
//#D0F0C0 matcha /lime
//#5B8930 moegi onion /jade

export const useStyles = makeStyles((theme) => ({
    //HomeScreen
    root: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    pink: {
        backgroundColor: "#D87C63",
        color: "#EBF6F7"
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
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    crimson: {
        backgroundColor: "#780109",
    },
    //Logo
    largeLogo: {
        height: 100,
    },
}));