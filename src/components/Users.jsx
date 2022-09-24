import { useContext, useEffect, useState } from "react";
import { fetchUsers } from "../utils/api";
import { UserContext } from "../utils/userContext";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { setLoggedInUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchUsers()
      .then(({ users }) => {
        setIsLoading(false);
        setIsError(false);
        setUsers(users);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading)
    return (
      <section className="loading">
        <h2>Loading...</h2>
        <div className="loader"></div>
      </section>
    );
  if (isError) return <p>Error during loading Users! </p>;

  return (
    <section className="users">
      {users.map((user, index) => {
        return (
          <div key={index} className="user">
            <p>{user.username}</p>
            <img
              className="user_img"
              src={user.avatar_url}
              alt={user.username}
            />
            <button
              className="userselectbutton"
              onClick={() => setLoggedInUser(user)}
            >
              Select
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Users;
