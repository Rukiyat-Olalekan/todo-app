import { useState, useEffect } from "react";
import axios from "../api/axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let isMounted = true;
    // axios new method for canceling request when the component unmounts
    const controller = new AbortController();

    async function getUsers() {
      try {
        const response = await axios.get("/users", {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error("Error while fetching users");
        }
        const data = response.data;
          isMounted && setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  return (
    <div>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user}</li>
          ))}
          ;
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default Users;
