import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../components/config";

const UsersListScreen = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user`);
      const users = response.data;
      return users;
    } catch (error) {
      console.log('error fetching users: ', error);
    }
  };

  const handlePictureTaken = async () => {
    const users = await getUsers();
    setUsers(users);
  };

  return (
    <div>
      <button onClick={handlePictureTaken}>Take Picture</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersListScreen;