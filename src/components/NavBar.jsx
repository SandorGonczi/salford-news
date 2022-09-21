import { Link } from "react-router-dom";
import { UserContext } from "../utils/userContext";
import { useContext } from "react";

const NavBar = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <section className="NavBar">
      <div>
        <h3 className="loggedInUser_text">
          {" "}
          You are logged in as {loggedInUser.username}
        </h3>
        <img
          className="loggedinUser_img"
          src={loggedInUser.avatar_url}
          alt={loggedInUser.username}
        />
      </div>
      <nav>
        <h2>Hello {loggedInUser.name}!</h2>
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
