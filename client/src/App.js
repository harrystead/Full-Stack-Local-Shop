import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavbarToggle from "./components/Nav/Navbar";
import ShopItemList from "./components/ShopItems/ShopItems";
import CreateItem from "./components/CreateItem/CreateItem";
import Signup from "./components/Register/Register";
import Login from "./components/Login/Login";
import ProfileDashboard from "./components/Profile/ProfileDashboard";
import EditDetails from "./components/EditDetails/EditDetails"
import "./styles/app.css";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoutes";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavbarToggle/>
        <Route exact path="/" component={ShopItemList} />
        <Route path="/edit" component={EditDetails} />
        <Route path="/create" component={CreateItem} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/profile" component={ProfileDashboard} />
        <Route path="/forgot-password" component={ForgotPassword} />
      </Router>
    </AuthProvider>
  );
}

export default App;
