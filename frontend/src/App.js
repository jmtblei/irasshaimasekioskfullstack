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
      fontWeight: "bold" 
    },
    h2: { 
      fontWeight: "bold" 
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    h5: {
      fontWeight: "bold",
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
