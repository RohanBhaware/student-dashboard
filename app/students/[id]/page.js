"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loader from "@/components/Loader";

export default function StudentDetails() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, [id]);

  if (!student) return <Loader />;

  return (
    <div className="p-6 max-w-xl border justify-center mt-50 mx-auto">
      <h1 className="text-xl font-bold mb-4">{student.name}</h1>

      <p><b>Username:</b> {student.username}</p>
      <p><b>Email:</b> {student.email}</p>
      <p><b>Phone:</b> {student.phone}</p>
      <p><b>Website:</b> {student.website}</p>
      <p>
        <b>Address:</b> {student.address.street}, {student.address.city}
      </p>
      <p><b>Company:</b> {student.company.name}</p>
    </div>
  );
}