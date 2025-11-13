import React from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../context/UserContext"
import Loading from "../Components/Loading";
import UserTable from "../Components/UserTable";

export default function Home() {
  const { users, loading, error, removeUser } = useUsers();

  return (
    <div>
      <div className=" mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        
      </div>

      {loading && <Loading />}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && <UserTable users={users} onDelete={removeUser} />}
    </div>
  );
}
