"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddStudent() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, city } = form;

    const students = JSON.parse(localStorage.getItem("students")) || [];

    students.push({
      id: Date.now(),
      name,
      email,
      phone,
      company: { name: "New Company" },
      address: { city, street: "N/A" },
    });

    localStorage.setItem("students", JSON.stringify(students));

    alert("Student Added Successfully");
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border p-6 rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">
          Add Student
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
            className="w-full border p-2"
          />

          <input
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            className="w-full border p-2"
          />

          <input
            name="phone"
            placeholder="Enter Phone"
            onChange={handleChange}
            className="w-full border p-2"
          />

          <input
            name="city"
            placeholder="Enter City"
            onChange={handleChange}
            className="w-full border p-2"
          />

          <button
            type="submit"
            className="w-50 bg-gray-900 text-white py-1 hover:bg-gray-400 rounded-lg"
          >
            Add Student
          </button>

        </form>
      </div>
    </div>
  );
}