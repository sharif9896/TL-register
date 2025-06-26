import { Link } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import DreamCompaniesGrid from "./components/DreamCompaniesGrid";
import PlacedStudents from "./components/PlacedStudents";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow p-4 flex items-center">
          <img src="logos.png" alt="Logo" className="h-10 mr-4" />
          <Link to={"/"} className="text-xl font-bold">
            Tech Lead Academy
          </Link>
          <nav className="ml-auto">
            <Link
              to={"/Students"}
              className="bg-blue-500 py-2 px-2 rounded hover:bg-blue-600 cursor-pointer mx-2"
            >
              Sigma 1.0
            </Link>
          </nav>
        </header>

        <img src="ng.png" alt="Banner" className="w-full  object-cover" />

        <main className="p-4 max-w-lg mx-auto mt-4 bg-white rounded shadow">
          <RegisterForm />
        </main>
        <DreamCompaniesGrid />
        <PlacedStudents />
        <Footer />
      </div>
    </>
  );
};
export default Home;
