// Component ya navigation
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="main-nav">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/apply" className="nav-link">Apply Loan</Link>
      <Link to="/login" className="nav-link">Applicant Login</Link>
      <Link to="/admin-login" className="nav-link">Admin Login</Link>
      <Link to="/repayment" className="nav-link">Make Payment</Link>
      <Link to="/dashboard" className="nav-link">My Account</Link>
      <button className="nav-button">Logout</button>
    </nav>
  );
}

export default Navbar;
