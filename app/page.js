"use client";

import { useEffect, useState } from "react";
import StudentCard from "@/components/StudentCard";
import SearchBar from "@/components/SearchBar";
import Loader from "@/components/Loader";
import Link from "next/link";

export default function Home() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {

      const localStudents =
        JSON.parse(localStorage.getItem("students")) || [];

      const allStudents = [...data, ...localStudents];

      setStudents(allStudents);
      setLoading(false);
    });
}, []);

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loader />;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>

      <Link href="/add-student">
        <button className="mb-4 bg-gray-900 text-white hover:bg-gray-400 px-4 py-2 rounded">
            Add Student
        </button>
      </Link>

      <SearchBar search={search} setSearch={setSearch} />

      {filtered.length === 0 ? (
        <p>No students found</p>
      ) : (
        <div className="grid md:grid-cols-4 gap-5">
          {filtered.map((student) => (
            <StudentCard key={student.id} student={student}/>
          ))}
        </div>
      )}
    </div>
  );
}