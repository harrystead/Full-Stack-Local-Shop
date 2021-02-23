
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar navbar-light bg-light navbar-expand-lg">
        <h2 className="navbar-brand">ThriftSale</h2>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item centre-nav">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item centre-nav">
          <Link to="/profile" className="nav-link">Profiles</Link>
          </li>
          <li className="navbar-item navbar-float-right">
          <Link to="/create" className="nav-link navbar-float-right">Add Item</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
}

export default Navbar;