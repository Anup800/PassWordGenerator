import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Welcome</h1>
        <p className="mt-2 text-gray-600">Choose a tool to get started.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Link
            to="/password-generator"
            className="block rounded-xl bg-white shadow p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-900">Password Generator</h2>
            <p className="mt-2 text-gray-600">
              Generate a random password with adjustable options.
            </p>
          </Link>

          <Link
            to="/tic-tac-toe"
            className="block rounded-xl bg-white shadow p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-900">Tic-Tac-Toe</h2>
            <p className="mt-2 text-gray-600">Play a classic 3×3 grid game.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
