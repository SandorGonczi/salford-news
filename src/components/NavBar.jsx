import { Link } from "react-router-dom";
import { UserContext } from "../utils/userContext";
import { useContext } from "react";

const NavBar = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <section className="NavBar">
      <nav>
        <h2>Hello {loggedInUser.name}</h2>
        <Link className="navlink" to="/">
          Home{" "}
        </Link>
        <Link className="navlink" to="/topics">
          Topics
        </Link>
        <Link className="navlink" to="/users">
          {" "}
          Change User
        </Link>
      </nav>
      <h2 className="loggedInUser_text">
        {" "}
        You are logged in as {loggedInUser.username}
      </h2>
      <img
        className="loggedinUser_img"
        src={loggedInUser.avatar_url}
        alt={loggedInUser.username}
      />
    </section>
  );
};

export default NavBar;
