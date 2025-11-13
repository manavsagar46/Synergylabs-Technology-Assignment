
import { Link } from "react-router-dom";

export default function Header(){
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">User Management</Link>
        <nav>
          <Link to="/create" className="px-4 py-2 bg-blue-600 text-white rounded">Create User</Link>
        </nav>
      </div>
    </header>
  );
}
