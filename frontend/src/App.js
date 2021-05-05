import { Route, BrowserRouter } from "react-router-dom";
import {
  Container,
  createMuiTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
} from '@material-ui/core';

import HomeScreen from "./screens/HomeScreen";
import ChooseScreen from "./screens/ChooseScreen";
import OrderScreen from "./screens/OrderScreen";

const theme = createMuiTheme({
  typography: {
    h1: { 
      fontWeight: "bold", 
      textShadow: "1px 1px 5px #780109",
    },
    h2: { 
      fontWeight: "bold",
      textShadow: "1px 1px 5px #780109",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      textShadow: "1px 1px 5px #780109",
    },
    h4: {
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
    primary: { 
      main: "#FFFFFF",
    },
    secondary: {
      main: "#EBF6F7",
      contrastText: "#D87C63",
    },
  },
})

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="sm">
            <Paper>
              <Route path="/" component={HomeScreen} exact={true}></Route>
              <Route path="/choose" component={ChooseScreen} exact={true}></Route>
              <Route path="/order" component={OrderScreen} exact={true}></Route>
            </Paper>
          </Container>
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
