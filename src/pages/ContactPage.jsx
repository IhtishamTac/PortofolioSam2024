import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; 

const ContactPage = () => {
  return (
    <>
      <Nav />
      <div className="main min-h-screen bg-slate-950 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-white mb-8">
          Connect with Me
        </h2>

        <div className="flex space-x-8">
          {/* Social Media Icons */}
          <a href="https://www.facebook.com/roby.ihtisyam" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
            <FaFacebook size={40} />
          </a>
          <a href="https://x.com/Whiffysqui49603" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaTwitter size={40} />
          </a>
          <a href="https://www.instagram.com/rbyhtisn_/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
            <FaInstagram size={40} />
          </a>
          <a href="https://www.linkedin.com/in/ihtishamkoernia/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
            <FaLinkedin size={40} />
          </a>
          <a href="https://github.com/IhtishamTac" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
            <FaGithub size={40} />
          </a>
        </div>

        <p className="text-white mt-8 text-center">
          Follow me on social media for the latest updates and news.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
