export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-2 border rounded mb-4"
    />
  );
}