import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUser } from "../api/users";
import { useUsers } from "../context/UserContext";
import Loading from "../Components/Loading";

export default function CreateEdit({ editMode }) {
  const { addUser, editUser } = useUsers();
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Load data for edit mode
  useEffect(() => {
    if (editMode) {
      setLoading(true);
      fetchUser(id)
        .then((data) => {
          setForm({
            name: data.name,
            email: data.email,
            phone: data.phone,
          });
          setLoading(false);
        })
        .catch(() => {
          alert("Error loading data");
          setLoading(false);
        });
    }
  }, [editMode, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editMode) {
      await editUser(id, form);
      alert("User updated (simulated)");
    } else {
      await addUser(form);
      alert("User created (simulated)");
    }

    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4">
            {editMode ? "Edit User" : "Create User"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full p-2 border rounded"
              placeholder="Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
            />

            <input
              className="w-full p-2 border rounded"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
            />

            <input
              className="w-full p-2 border rounded"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              required
            />

            <div className="flex gap-2">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                {editMode ? "Update" : "Create"}
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
