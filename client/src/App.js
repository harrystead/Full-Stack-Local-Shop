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
import { ItemsContext } from "./contexts/ItemsContext";

function App() {
  const [listData, setListData] = useState([]);
  const [request, setRequest] = useState("");

  useEffect(() => {
    API.getItems()
      .then((response) => {
        setListData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [request]);

  return (
    <AuthProvider>
      <ItemsContext.Provider value={listData}>
      <Router>
        <NavbarToggle />
        <Switch>
          <Route exact path="/">
            <ShopItems listData={listData} setRequest={setRequest}/>
          </Route>
          <Route path="/create">
            <CreateItem setRequest={setRequest}/>
          </Route>
          <Route path="/signup" component={Signup} />
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/profile" component={ProfileDashboard} />
          <PrivateRoute path="/basket">
            <Basket />
          </PrivateRoute>
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/:id">
            <SingleItem setRequest={setRequest}/>
          </Route>
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
      </ItemsContext.Provider>
    </AuthProvider>
  );
}

export default App;
