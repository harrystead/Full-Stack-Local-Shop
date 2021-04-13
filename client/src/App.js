import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarToggle from "./components/Nav/Navbar";
import ShopItems from "./components/ShopItems/ShopItems";
import CreateItem from "./components/CreateItem/CreateItem";
import Signup from "./components/Register/Register";
import Login from "./components/Login/Login";
import ProfileDashboard from "./components/Profile/ProfileDashboard";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoutes";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import SingleItem from "./components/SingleItem/SingleItem";
import NoMatch from "./components/NoMatch/NoMatch";
import API from "./contexts/API";
import Basket from "./components/Basket/Basket";

function App() {
  const [data, setData] = useState([]);
  const [indItem, setIndItem] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    API.getItems()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AuthProvider>
      <Router>
        <NavbarToggle />
        <Switch>
          <Route exact path="/">
            <ShopItems data={data} />
          </Route>
          <Route path="/create" component={CreateItem} />
          <Route path="/signup" component={Signup} />
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/profile" component={ProfileDashboard} />
          <PrivateRoute path="/basket">
            <Basket indItem={indItem} setIndItem={setIndItem} />
          </PrivateRoute>
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/:id">
            <SingleItem
              item={data}
              indItem={indItem}
              setIndItem={setIndItem}
              basket={basket}
              setBasket={setBasket}
            />
          </Route>
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
