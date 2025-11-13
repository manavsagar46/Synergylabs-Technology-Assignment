import React from "react";
import { useParams, Link } from "react-router-dom";
import { useUsers } from "../context/UserContext";
import Loading from "../Components/Loading";

export default function UserDetails() {
  const { id } = useParams();
  const { users, loading } = useUsers();

  if (loading) return <Loading />;
  const user = users.find((u) => String(u.id) === String(id));

  if (!user) return <div className="text-center p-6">User not found</div>;

  return (
    <div className="max-w-md bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p className="mt-2">
        <strong>Address:</strong> {user.address?.street}, {user.address?.city}
      </p>
      <div className="mt-4">
        <Link to={`/edit/${user.id}`} className="px-3 py-2 border rounded mr-2">
          Edit
        </Link>
        <Link to="/" className="px-3 py-2 border rounded">
          Back
        </Link>
      </div>
    </div>
  );
}
