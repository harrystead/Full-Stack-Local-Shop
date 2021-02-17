import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import ShopItemList from "./components/ShopItems";
import EditItem from "./components/EditItem";
import CreateItem from "./components/CreateItem";
import CreateUser from "./components/User";
import "./app.css";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ShopItemList} />
      <Route path="/edit/:id" component={EditItem} />
      <Route path="/user" component={CreateUser} />
      <Route path="/create" component={CreateItem} />
    </Router>
  );
}

export default App;
