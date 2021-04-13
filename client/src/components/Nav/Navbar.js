import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus
} from "@fortawesome/free-solid-svg-icons";

const NavbarToggle = () => {
  const { currentUser } = useAuth();

  const navCondition = () => {
    if (currentUser) {
      return (
        <>
        <Link to="/basket">
        <FontAwesomeIcon className="cart-btn" icon={faCartPlus} />
        </Link>
        <Link to="/create">
          <Button className="post-btn" variant="success">Post Item</Button>
        </Link>
        </>
      );
    }
    return (
      <div>
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/signup" className="nav-link">
          Sign Up
        </Link>
      </div>
    );
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">LocalThrift</Navbar.Brand>
      <Navbar />
      <Nav className="mr-auto">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/profile" className="nav-link">
          Profile
        </Link>
      </Nav>
      <Nav>{navCondition()}</Nav>
    </Navbar>
  );
};

export default NavbarToggle;
