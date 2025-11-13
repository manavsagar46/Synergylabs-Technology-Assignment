import axios from "axios";

const BASE = "https://jsonplaceholder.typicode.com/users";

// Fetching all users
export async function fetchUsers() {
  const res = await axios.get(BASE);
  return res.data;
}

// Fetching a single user by ID
export async function fetchUser(id) {
  const res = await axios.get(`${BASE}/${id}`);
  return res.data;
}

// Creating a user
export async function createUser(payload) {
  const res = await axios.post(BASE, payload);
  return res.data;
}

// Updating a user
export async function updateUser(id, payload) {
  const res = await axios.put(`${BASE}/${id}`, payload);
  return res.data;
}

// Deleting a user
export async function deleteUser(id) {
  const res = await axios.delete(`${BASE}/${id}`);
  return res.status === 200;
}
