import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white fst-italic" to="/">
          Company Portal
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link fw-bold text-white fst-italic"
                to="/signup"
              >
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link fw-bold text-white fst-italic"
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link fw-bold text-white fst-italic"
                to="/admin"
              >
                Admin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link fw-bold text-white fst-italic"
                to="/employee"
              >
                Employee
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
