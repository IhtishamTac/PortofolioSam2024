import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-slate-950 absolute top-0 left-0 right-0 p-8 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link to="/">Sam Dev</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white">
                        Home
                    </Link>
                    <Link to="/about-me" className="text-gray-300 hover:text-white">
                        About
                    </Link>
                    {/* <Link to="/achievement" className="text-gray-300 hover:text-white">
                        Achievement
                    </Link> */}
                    <Link to="/contact" className="text-gray-300 hover:text-white">
                        Contact
                    </Link>
                </div>
                <div className="md:hidden">
                    <button
                        type="button"
                        className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <Link to="/" className="block text-gray-300 hover:text-white p-2">
                    Home
                </Link>
                <Link to="/about-me" className="block text-gray-300 hover:text-white p-2">
                    About
                </Link>
                <Link to="/contact" className="block text-gray-300 hover:text-white p-2">
                    Contact
                </Link>
            </div>
        </nav>
    );
}
export default Nav;