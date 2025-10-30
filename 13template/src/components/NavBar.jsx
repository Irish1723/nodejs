export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm py-3 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="SmartLearn AI" className="h-8" />
        <span className="text-xl font-semibold">SmartLearn AI</span>
      </div>
      <div className="flex gap-4">
        <button className="text-gray-700">Courses</button>
        <button className="text-gray-700">Zoom</button>
        <button className="text-gray-700">Dashboard</button>
        <button className="text-gray-700">AI</button>
      </div>
    </nav>
  );
}
