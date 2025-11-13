import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import CreateEdit from "./pages/CreateEdit";
import Header from "./Components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/create" element={<CreateEdit />} />
          <Route path="/edit/:id" element={<CreateEdit editMode />} />
        </Routes>
      </main>
    </div>
  );
}
