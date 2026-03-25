import Link from "next/link";

export default function StudentCard({ student }) {
  return (
    <Link href={`/students/${student.id}`}>
      <div className="border p-4 h-50 hover:bg-gray-100 ">
        <h2 className="font-bold text-left">Name: {student.name}</h2>
        <p>Email: {student.email}</p>
        <p>{student.phone}</p>
        <p className="text-sm text-gray-500">
          {student.company?.name}
        </p>
      </div>
    </Link>
  );
}