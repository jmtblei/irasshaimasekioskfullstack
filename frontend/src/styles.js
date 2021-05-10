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
        color: "#780109"
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
    centerRow: {
        display: "flex",
        alignItems: "center",
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
    //OrderScreen
    sideButtons: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        "&:hover": {
            color: "#780109",
            backgroundColor: "#EBF6F7",
        },
    },
    title: {
        marginTop: 20,
        marginLeft: 10,
    },
    row: {
        display: 'flex',
        padding: 10,
    },
    incrementButton: {
        color: "#780109",
        "&:hover": {
            color: "#EBF6F7",
            backgroundColor: "#780109",
            border: "1px solid #D87C63",
        },
    },
    largeInput: {
        width: '60px!important',
        padding: '0!important',
        fontSize: '35px!important',
        textAlign: 'center!important',
        backgroundColor: "#FFFFFF",
        color: "#780109",
    },
    around: {
        justifyContent: 'space-around',
    },
    between: {
        display: "flex",
        justifyContent: 'space-between',
    },
    largeButton: {
        width: 250,
        color: "#EBF6F7",
        backgroundColor: "#D87C63",
        border: "1px solid #780109",
        "&:hover": {
            color: "#EBF6F7",
            backgroundColor: "#780109",
            border: "1px solid #D87C63",
        },    
    },
    menuCard: {
        width: 200,
        margin: 10,
        backgroundColor: "#EBF6F7",
        border: "1px solid #780109",
    },
    //ReviewScreen
    betweenCenter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    reviewSpace: {
        marginTop: 10,
    },
    editButton: {
        height: 50,
        color: "#EBF6F7",
        backgroundColor: "#D87C63",
        border: "1px solid #780109",
        "&:hover": {
            color: "#EBF6F7",
            backgroundColor: "#780109",
            border: "1px solid #D87C63",
        },    
    },
}));