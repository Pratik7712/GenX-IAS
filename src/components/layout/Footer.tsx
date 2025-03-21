import React from "react";
import {
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollToTop from "../ui/scroll-to-top";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIconVariants = {
    hover: {
      y: -5,
      scale: 1.2,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const linkVariants = {
    hover: { x: 5, transition: { duration: 0.2 } },
  };

  return (
    <footer className="bg-gradient-to-b from-midnight-500 to-midnight-600 text-white py-16 relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-12 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 font-heading">
              GenX IAS Institute
            </h2>
            <p className="mb-6 text-gray-100">
              Empowering aspirants to achieve excellence in civil services
              examinations through quality education and mentorship.
            </p>
            <div className="flex space-x-5">
              <motion.a
                href="https://www.youtube.com/@genxias7638"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-crimson-300 transition-colors bg-midnight-600 p-2.5 rounded-full"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <Youtube size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/genx.ias/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-crimson-300 transition-colors bg-midnight-600 p-2.5 rounded-full"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://t.me/GenXIAS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-crimson-300 transition-colors bg-midnight-600 p-2.5 rounded-full"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.99 5.363l-3.379 15.927c-.255 1.122-.92 1.403-1.867.875l-5.156-3.797-2.487 2.391c-.275.275-.505.505-1.035.505l.369-5.235L16.51 8.215c.393-.349-.085-.542-.61-.193L6.225 13.899l-5.077-1.588c-1.104-.344-1.122-1.104.229-1.632L20.622 3.745c.919-.344 1.722.204 1.368 1.618z"></path>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-5 font-heading">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/courses", label: "Courses" },
                { to: "/batches", label: "Batches" },
                { to: "/faculty", label: "Faculty" },
                { to: "/success-stories", label: "Success Stories" },
                { to: "/contact", label: "Contact" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Link
                    to={link.to}
                    className="text-gray-100 hover:text-crimson-300 transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span> {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-5 font-heading">
              Our Programs
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/#courses", label: "UPSC Program", isScroll: true },
                { to: "/#courses", label: "GPSC Program", isScroll: true },
                { to: "/#courses", label: "PI Program", isScroll: true },
                { to: "/#courses", label: "PSI/CONSTABLE Program", isScroll: true },
                { to: "/#courses", label: "CCE Program", isScroll: true }
              ].map((program, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <a
                    href={program.to}
                    className="text-gray-100 hover:text-crimson-300 transition-colors flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('courses');
                      if (element) {
                        element.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        });
                      }
                    }}
                  >
                    <span className="mr-2">›</span> {program.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-5 font-heading">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="mr-3 h-5 w-5 text-crimson-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-100 group-hover:text-crimson-300 transition-colors">
                  3rd floor, SHREE business hub, TELEPHONE EXCHANGE, Beside green rio restaurant, GIDC Naroda, Ahmedabad, Gujarat 382330
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="mr-3 h-5 w-5 text-crimson-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-100 group-hover:text-crimson-300 transition-colors">
                  7990661375
                </span>
              </li>
              <li className="flex items-center group">
                <Mail className="mr-3 h-5 w-5 text-crimson-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-100 group-hover:text-crimson-300 transition-colors">
                  genxias@gmail.com
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-midnight-600 mt-12 pt-8 text-center text-gray-100">
          <p>&copy; {currentYear} GenX IAS Institute. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop showBelow={300} />
    </footer>
  );
};

export default Footer;
