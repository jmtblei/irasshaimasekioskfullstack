import React, { useContext } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import {
  Container,
  createMuiTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
} from "@material-ui/core";
import { Helmet } from "react-helmet";
import { Store } from "./context/Store";

import HomeScreen from "./screens/HomeScreen";
import ChooseScreen from "./screens/ChooseScreen";
import OrderScreen from "./screens/OrderScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SelectPaymentScreen from "./screens/SelectPaymentScreen";
import PaymentScreen from "./screens/PaymentScreen";
import CompleteOrderScreen from "./screens/CompleteOrderScreen";
import QueueScreen from "./screens/QueueScreen";

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
      main: "#780109",
      contrastText: "#D87C63",
    },
  },
})

function App() {
  const { state } = useContext(Store);

  return (
    <BrowserRouter>
      <Helmet>
        <title>
          Irasshaimase!
          (いらっしゃいませ！)
        </title>
      </Helmet>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth={state.widthScreen ? 'lg' : 'sm'}>
            <Paper>
              <Route path="/" component={HomeScreen} exact={true}></Route>
              <Route path="/choose" component={ChooseScreen} exact={true}></Route>
              <Route path="/order" component={OrderScreen} exact={true}></Route>
              <Route path="/review" component={ReviewScreen} exact></Route>
              <Route path="/select-payment" component={SelectPaymentScreen} exact></Route>
              <Route path="/payment" component={PaymentScreen} exact></Route>
              <Route path="/complete" component={CompleteOrderScreen} exact></Route>
              <Route path="/queue" component={QueueScreen} exact></Route>
            </Paper>
          </Container>
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
