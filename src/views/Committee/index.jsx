import { Link } from "react-router-dom";

/**
 * Organizing Committee Section
 */
const Committee = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold underline">Organizing Committee</h1>
      <Link
        to="/team"
        className="mt-10 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Our Team
      </Link>
    </div>
  );
};

export default Committee;
