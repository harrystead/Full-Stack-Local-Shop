import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ShopItemList from "./components/ShopItems";
import EditItem from "./components/EditItem";
import CreateItem from "./components/CreateItem";
import Signup from "./components/Register";
import Login from "./components/Login";
import ProfileDashboard from "./components/ProfileDashboard";
import "./styles/app.css";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoutes";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Route path="/home" component={ShopItemList} />
        <Route path="/edit" component={EditItem} />
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
