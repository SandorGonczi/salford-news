import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link className="navlink" to="/">
        <h1>Salford Tech News!</h1>
      </Link>
    </header>
  );
};

export default Header;
