import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavbarToggle from "./components/Navbar";
import ShopItemList from "./components/ShopItems";
import CreateItem from "./components/CreateItem";
import Signup from "./components/Register";
import Login from "./components/Login";
import ProfileDashboard from "./components/ProfileDashboard";
import EditDetails from "./components/EditDetails"
import "./styles/app.css";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoutes";
import ForgotPassword from "./components/ForgotPassword";

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
