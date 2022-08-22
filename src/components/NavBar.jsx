import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section>
      <nav className="NavBar">
        <h2>Hello</h2>

        <Link className="navlink" to="/">
          Home{" "}
        </Link>
        <Link className="navlink" to="/topics">
          Topics
        </Link>
        <Link className="navlink" to="/selectuser">
          {" "}
          Change User
        </Link>
      </nav>
    </section>
  );
};

export default NavBar;
