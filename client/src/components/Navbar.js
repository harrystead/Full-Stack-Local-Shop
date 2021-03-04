
import { Link } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";

const NavbarToggle = () => {
    return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">LocalThrift</Navbar.Brand>
  <Navbar />
    <Nav className="mr-auto">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/profile" className="nav-link">Profile</Link>
    </Nav>
    <Nav>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/signup" className="nav-link">Sign Up</Link>
    </Nav>
</Navbar>
    )
}

export default NavbarToggle;