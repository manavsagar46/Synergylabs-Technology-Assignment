import React from "react";
import { Link } from "react-router-dom";

export default function UserRow({ user, onDelete }) {
  return (
    <tr className="border-t">
      <td className="p-3">{user.name}</td>
      <td className="p-3">{user.email}</td>
      <td className="p-3">{user.phone}</td>
      <td className="p-3 text-center">
        <div className="flex gap-2 justify-center">
          <Link to={`/user/${user.id}`} className="px-2 py-1 border rounded">View</Link>
          <Link to={`/edit/${user.id}`} className="px-2 py-1 border rounded">Edit</Link>
          <button onClick={() => onDelete(user.id)} className="px-2 py-1 bg-red-500 text-white rounded cursor-pointer">Delete</button>
        </div>
      </td>
    </tr>
  );
}
