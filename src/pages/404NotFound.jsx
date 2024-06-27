import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <>
        <Nav />
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950">
            <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-500 mb-8">The page you are looking for does not exist.</p>
            <button onClick={()=>navigate(-1)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Go to Home
            </button>
        </div>
        </>
    );
};

export default NotFound;