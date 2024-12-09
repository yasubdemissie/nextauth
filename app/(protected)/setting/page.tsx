function Settings() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-green-400 to-blue-500 p-6 text-white text-center shadow-md">
        <h1 className="text-3xl font-bold">Settings</h1>
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
          <h2 className="text-2xl font-semibold mb-4">Settings</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Save Changes
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Settings;
