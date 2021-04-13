import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarToggle from "./components/Nav/Navbar";
import ShopItemList from "./components/ShopItems/ShopItems";
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
import { ItemsContext } from "./contexts/ItemsContext";
import Basket from "./components/Basket/Basket";

function App() {
  let [data, setData] = useState([]);
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
      <ItemsContext.Provider value={data}>
        <Router>
          <NavbarToggle />
          <Switch>
            <Route exact path="/" component={ShopItemList} />
            <Route path="/create" component={CreateItem} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/profile" component={ProfileDashboard} />
            <PrivateRoute path="/basket" component={Basket} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/:id" component={SingleItem} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </Router>
      </ItemsContext.Provider>
    </AuthProvider>
  );
}

export default App;
