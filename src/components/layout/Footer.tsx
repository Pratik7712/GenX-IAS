import React, { useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState("#home");

  // Handle scroll event to update active section
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      let foundActiveSection = false;
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (offset >= sectionTop && offset < sectionTop + sectionHeight) {
          setActiveSection(`#${section.id}`);
          foundActiveSection = true;
        }
      });

      // If no section is in view, default to #home
      if (!foundActiveSection && offset < 100) {
        setActiveSection("#home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if a menu item is active
  const isActive = (href: string) => {
    return activeSection === href;
  };

  // Smooth scrolling function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // Set the active section immediately on click
    setActiveSection(href);

    // Handle special case for home
    if (href === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

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

  // Updated footer links with correct IDs
  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#courses", label: "Courses" },
    { href: "#batches", label: "Batches" },
    { href: "#faculty", label: "Faculty" },
    { href: "#success-stories", label: "Success Stories" },
    { href: "#contact", label: "Contact" },
  ];

  // Our Programs links
  const programLinks = [
    { href: "#courses", label: "UPSC Program" },
    { href: "#courses", label: "GPSC Program" },
    { href: "#courses", label: "PI Program" },
    { href: "#courses", label: "PSI/CONSTABLE Program" },
    { href: "#courses", label: "CCE Program" }
  ];

  return (
    <footer className="bg-gradient-to-b from-midnight-500 to-midnight-600 text-white py-10 sm:py-12 md:py-16 relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-8 sm:h-12 text-white"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-heading">
              GenX IAS
            </h2>
            <p className="mb-4 sm:mb-6 text-gray-100 text-sm sm:text-base">
              Empowering aspirants to achieve excellence in civil services
              examinations through quality education and mentorship.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.youtube.com/@genxias7638"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-crimson-300 transition-colors bg-midnight-600 p-2 sm:p-2.5 rounded-full"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <Youtube size={18} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/genx.ias/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-crimson-300 transition-colors bg-midnight-600 p-2 sm:p-2.5 rounded-full"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="https://t.me/GenXIAS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-crimson-300 transition-colors bg-midnight-600 p-2 sm:p-2.5 rounded-full"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
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
            className="mt-2 sm:mt-0"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-5 font-heading">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`text-sm sm:text-base lg:text-lg flex items-center transition-all duration-300 group ${
                      isActive(link.href)
                        ? "text-crimson-500 font-semibold"
                        : "text-gray-100 hover:text-crimson-300"
                    }`}
                  >
                    <span className="mr-2 transform transition-transform duration-300 group-hover:translate-x-1">›</span> {link.label}
                  </a>
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
            className="mt-2 sm:mt-0"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-5 font-heading">
              Our Programs
            </h3>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              {programLinks.map((program, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <a
                    href={program.href}
                    onClick={(e) => handleSmoothScroll(e, program.href)}
                    className={`text-sm sm:text-base lg:text-lg flex items-center transition-all duration-300 group ${
                      isActive(program.href) && program.label.includes("UPSC")
                        ? "text-crimson-500 font-semibold"
                        : "text-gray-100 hover:text-crimson-300"
                    }`}
                  >
                    <span className="mr-2 transform transition-transform duration-300 group-hover:translate-x-1">›</span> {program.label}
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
            className="mt-2 sm:mt-0 sm:col-span-2 lg:col-span-1"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-5 font-heading">
              Contact Us
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start group">
                <MapPin className="mr-3 h-4 w-4 sm:h-5 sm:w-5 text-crimson-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <a 
                  href="https://maps.google.com/?q=3rd floor, SHREE business hub, TELEPHONE EXCHANGE, GIDC Naroda, Ahmedabad, Gujarat 382330" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 group-hover:text-crimson-300 transition-colors text-sm sm:text-base"
                >
                  3rd floor, SHREE business hub, TELEPHONE EXCHANGE, Beside green rio restaurant, GIDC Naroda, Ahmedabad, Gujarat 382330
                </a>
              </li>
              <li className="flex items-center group">
                <Phone className="mr-3 h-4 w-4 sm:h-5 sm:w-5 text-crimson-400 group-hover:scale-110 transition-transform duration-300" />
                <a href="tel:7990661375" className="text-gray-100 group-hover:text-crimson-300 transition-colors text-sm sm:text-base">
                  7990661375
                </a>
              </li>
              <li className="flex items-center group">
                <Mail className="mr-3 h-4 w-4 sm:h-5 sm:w-5 text-crimson-400 group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:genxias@gmail.com" className="text-gray-100 group-hover:text-crimson-300 transition-colors text-sm sm:text-base">
                  genxias@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Get the App */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-2 sm:mt-0"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-5 font-heading">
              Get the App
            </h3>
            <p className="text-gray-100 mb-4 text-sm sm:text-base">
              Download our mobile app to access study materials and stay updated with your course progress.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <a 
                href="https://play.google.com/store/apps/details?id=co.diy18.pimgg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex"
              >
                <div className="bg-black hover:bg-[#0F1923] hover:text-[#ED344C] transition-all duration-300 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl flex items-center gap-2 sm:gap-3">
                  <svg width="20" height="20" viewBox="0 0 512 512" className="flex-shrink-0">
                    <path fill="#EA4335" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"/>
                    <path fill="#34A853" d="M47 512c13 6.8 21.7 6.8 34.7 0L383 321.3l-60.1-60.1L47 512z"/>
                    <path fill="#4285F4" d="M464 261.3L380.2 214 319.9 274.3l60.3 60.3L464 287.3c18-12 18-38.3 0-48.7z"/>
                    <path fill="#FBBC04" d="M380.2 214L159.3 52.8l60.1 60.1L380.2 214z"/>
                  </svg>
                  <div className="font-sans">
                    <div className="text-xs tracking-wide opacity-90 font-medium">GET IT ON</div>
                    <div className="text-xs sm:text-sm font-semibold tracking-wide">Google Play</div>
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="border-t border-midnight-400 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 text-center text-gray-100">
          <p className="text-sm">&copy; {currentYear} GenX IAS. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop showBelow={300} />
    </footer>
  );
};

export default Footer;
