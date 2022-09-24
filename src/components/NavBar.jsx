import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section className="navbar">
      <nav className="navlinks">
        <Link className="navlink" to="/topics">
          Topics
        </Link>
        <Link className="navlink" to="/users">
          {" "}
          Change User
        </Link>
      </nav>
    </section>
  );
};

export default NavBar;
