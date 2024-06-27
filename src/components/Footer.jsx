import { Link } from "react-router-dom";

const Footer = () => {
    const sendEmail = (event) => {
        event.preventDefault(); // Prevent the form from submitting the default way
        const email = document.getElementById("email").value;
        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ihtishamkoernia@gmail.com&su=Message from ${encodeURIComponent(email)}`;
        window.open(mailtoLink, '_blank');
    }

    return (
        <div className="footer bg-gray-900 text-white p-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-lg font-bold mb-4">
                        <Link to="/">Sam Dev</Link>
                    </h2>
                    <p>Creating innovative solutions for modern web development.</p>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                    <ul>
                        <li className="mb-2"><Link to="/">Home</Link></li>
                        <li className="mb-2"><Link to="/about">About</Link></li>
                        <li className="mb-2"><Link to="/services">Services</Link></li>
                        <li className="mb-2"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4">Follow Us</h2>
                    <ul>
                        <li className="mb-2"><a href="https://www.facebook.com/roby.ihtisyam/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li className="mb-2"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li className="mb-2"><a href="https://www.linkedin.com/in/ihtishamkoernia/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li className="mb-2"><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4">Send Mail</h2>
                    <form onSubmit={sendEmail}>
                        <input
                            type="email"
                            id="email"
                            name="subject"
                            placeholder="Enter your email"
                            className="w-full p-2 mb-4 text-gray-900 rounded"
                            required
                        />
                        <button type="submit" className="w-full p-2 bg-blue-600 rounded text-white">Send</button>
                    </form>
                </div>
            </div>
            <div className="mt-10 text-center border-t border-gray-700 pt-4">
                <p>&copy; 2024 Sam Dev. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
