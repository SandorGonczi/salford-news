import { useNavigate } from "react-router-dom";
import { UserContext } from "../utils/userContext";
import { useContext } from "react";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };

  return (
    <header
      onClick={() => {
        handleClick();
      }}
      className="header"
    >
      <h1>The Salfordian</h1>
      <div className="loggedinuser">
        <p> Logged in as {loggedInUser.username}</p>
        <img
          className="loggedinuser_img"
          src={loggedInUser.avatar_url}
          alt={loggedInUser.username}
        />
      </div>
    </header>
  );
};

export default Header;
