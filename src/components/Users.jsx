import { useContext, useEffect, useState } from "react";
import { fetchUsers } from "../utils/api";
import { UserContext } from "../utils/userContext";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetchUsers().then(({ users }) => {
      setUsers(users);
    });
  }, []);

  return (
    <section>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              <h2>{user.username}</h2>
              <img
                className="users_img"
                src={user.avatar_url}
                alt={user.username}
              />

              <button onClick={() => setLoggedInUser(user)}>
                Select this user!
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Users;
