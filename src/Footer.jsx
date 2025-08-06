import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CarFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white pt-12 pb-8 px-6 mt-20 rounded-t-3xl shadow-inner"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-4">CarElite</h2>
          <p className="text-gray-300">
            Drive your dream with our elite collection of luxury and performance cars.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold text-red-400 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-red-500 transition duration-300 cursor-pointer">Home</li>
            <li className="hover:text-red-500 transition duration-300 cursor-pointer">Inventory</li>
            <li className="hover:text-red-500 transition duration-300 cursor-pointer">About Us</li>
            <li className="hover:text-red-500 transition duration-300 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold text-red-400 mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-red-500 transition duration-300">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-red-500 transition duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-red-500 transition duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-red-500 transition duration-300">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-10 text-gray-400 text-sm">
        © {new Date().getFullYear()} CarElite. All rights reserved.
      </div>
    </motion.footer>
  );
}
