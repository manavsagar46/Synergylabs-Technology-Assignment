import { createContext, useContext, useEffect, useState } from "react";
import {
  fetchUsers,
  fetchUser,
  createUser,
  updateUser,
  deleteUser,
} from "../api/users";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);          
  const [loading, setLoading] = useState(false);   
  const [error, setError] = useState(null);        

  // fetch all users
  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await fetchUsers();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("Failed to load users");
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // CREATE user 
  const addUser = async (formData) => {
    const newUser = await createUser(formData);
    setUsers((prev) => [...prev, newUser]);
  };

  // UPDATE user
  const editUser = async (id, formData) => {
    const updatedUser = await updateUser(id, formData);
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, ...updatedUser } : u))
    );
  };

  // DELETE user 
  const removeUser = async (id) => {
    await deleteUser(id);
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
        addUser,
        editUser,
        removeUser,
        loadUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Easy hook
export const useUsers = () => useContext(UserContext);
