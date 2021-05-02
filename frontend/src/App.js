import {
  Container,
  createMuiTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
} from '@material-ui/core';
import HomeScreen from "./screens/HomeScreen";

const theme = createMuiTheme({
  typography: {
    h1: { 
      fontWeight: "bold", 
      textShadow: "1px 1px 5px #780109",
    },
    h2: { 
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      textShadow: "1px 1px 5px #780109",
    },
    h5: {
      fontWeight: "bold",
      textShadow: "1px 1px 5px #D87C63",
    },
  },
  palette: {
    primary: { main: "#780109" },
    secondary: {
      main: "#D87C63",
      contrastText: "#EBF6F7",
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper>
            <HomeScreen></HomeScreen>
          </Paper>
        </Container>
      </ThemeProvider>
  );
}

export default App;
