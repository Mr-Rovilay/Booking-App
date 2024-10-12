import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-padd-container">
        <div className="py-10 text-gray-300 bg-gray-900 rounded-xl">
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-3 lg:grid-cols-4">
        {/* Logo and Company Info */}
        <div className="mb-6">
          <h2 className="mb-3 text-2xl font-bold text-white">Home<span className="italic text-secondary">Rental</span></h2>
          <p className="text-sm">Find your dream home with ease. We provide you with exclusive property listings and seamless services.</p>
        </div>

        {/* Quick Links */}
        <div className="mb-6">
          <h3 className="mb-3 text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-6">
          <h3 className="mb-3 text-lg font-semibold text-white">Contact Us</h3>
          <ul className="space-y-2">
            <li>Email: info@homerental.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Real Estate St, City, Country</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="mb-6">
          <h3 className="mb-3 text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="p-2 transition rounded-full bg-secondary hover:bg-secondary-dark">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="p-2 transition rounded-full bg-secondary hover:bg-secondary-dark">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="p-2 transition rounded-full bg-secondary hover:bg-secondary-dark">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="p-2 transition rounded-full bg-secondary hover:bg-secondary-dark">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-6 mt-8 text-sm text-center text-gray-500 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} HomeRental. All Rights Reserved.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
