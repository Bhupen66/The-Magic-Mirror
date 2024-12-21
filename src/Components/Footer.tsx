import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 text-center">
            <div className="flex flex-wrap justify-around items-start">
                <div className="m-4">
                    <h2 className="text-xl mb-2">The Magic Mirror</h2>
                    <p>Your one-stop solution for all your magical needs.</p>
                </div>
                <div className="m-4">
                    <h2 className="text-xl mb-2">Contact Us</h2>
                    <p>Email: contact@themagicmirror.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
                <div className="m-4 space-x-4">
                    <h2 className="text-xl mb-2">Follow Us</h2>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-blue-600 transition-colors duration-300 mb-2">
                        <FaFacebook className="inline-block mr-2 text-2xl" /> Facebook
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 mb-2">
                        <FaTwitter className="inline-block mr-2 text-2xl" /> Twitter
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-pink-500 transition-colors duration-300 mb-2">
                        <FaInstagram className="inline-block mr-2 text-2xl" /> Instagram
                    </a>
                </div>
            </div>
            <div className="mt-8 text-sm">
                &copy; 2023 The Magic Mirror | All Rights Reserved
            </div>
        </footer>
    );
}

export default Footer;
