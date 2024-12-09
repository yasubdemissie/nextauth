function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-green-400 to-blue-500 p-6 text-white text-center shadow-md">
        <h1 className="text-3xl font-bold">Dashboard Header</h1>
      </header>
      <div className="flex flex-1">
        <aside className="bg-gray-800 text-white w-64 p-6 space-y-4 shadow-lg">
          <ul>
            <li className="hover:bg-gray-700 p-2 rounded">Home</li>
            <li className="hover:bg-gray-700 p-2 rounded">Profile</li>
            <li className="hover:bg-gray-700 p-2 rounded">Settings</li>
          </ul>
        </aside>
        <main className="flex-1 p-6 bg-gray-100">
          <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
          <p className="text-gray-700">
            This is where the main content will go.
          </p>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
