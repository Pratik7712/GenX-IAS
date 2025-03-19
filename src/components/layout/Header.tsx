import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface HeaderProps {
  logoSrc?: string;
  menuItems?: Array<{
    label: string;
    href: string;
    submenu?: Array<{
      label: string;
      href: string;
      description?: string;
    }>;
  }>;
  contactPhone?: string;
  contactEmail?: string;
}

const Header = ({
  logoSrc = "./genxiaslogo.jpg",
  menuItems = [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      submenu: [
        {
          label: "Academy Overview",
          href: "/about#overview",
          description: "Learn about our academy and its history",
        },
        {
          label: "Vision & Mission",
          href: "/about#vision",
          description: "Our guiding principles and goals",
        },
        {
          label: "Founder",
          href: "/about#founder",
          description: "Meet Mr. Shubham Pandey, our founder",
        },
        {
          label: "Managing Director",
          href: "/about#director",
          description: "Meet Mrs. Shradhha Solanki, our managing director",
        },
      ],
    },
    {
      label: "Courses",
      href: "/courses",
      submenu: [
        {
          label: "UPSC Program",
          href: "/courses/upsc",
          description: "Comprehensive preparation for UPSC exams",
        },
        {
          label: "GPSC Program",
          href: "/courses/gpsc",
          description: "Specialized coaching for GPSC exams",
        },
        {
          label: "PI Program",
          href: "/courses/pi",
          description: "Personal Interview preparation program",
        },
        {
          label: "PSI/CONSTABLE Program",
          href: "/courses/psi",
          description: "Training for PSI and Constable exams",
        },
        {
          label: "CCE Program",
          href: "/courses/cce",
          description: "Combined Competitive Examination preparation",
        },
      ],
    },
    { label: "Batches", href: "/batches" },
    { label: "Faculty", href: "/faculty" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  contactPhone = "+91 9876543210",
  contactEmail = "info@genxiasacademy.com",
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");

  // Handle scroll event to shrink navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (offset >= sectionTop && offset < sectionTop + sectionHeight) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if a menu item is active
  const isActive = (href: string) => {
    if (href === "/") return activeSection === "/";
    return activeSection.includes(href.replace("/", "#"));
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-b from-midnight-600 to-midnight-500 text-white backdrop-blur-sm transition-all duration-300 ${scrolled ? "shadow-lg py-1" : "shadow-md py-3"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/" className="flex items-center">
              <div className={`overflow-hidden rounded-full border-2 border-crimson-300 p-1 transition-all duration-300 ${scrolled ? "h-16 w-16" : "h-20 w-20"}`}>
                <img
                  src="/GENX IAS LOGO.png"
                  alt="GenX IAS Academy"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://api.dicebear.com/7.x/avataaars/svg?seed=GenXIAS";
                  }}
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item, index) => {
                  // If the item has a submenu, render a dropdown
                  if (item.submenu) {
                    return (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuTrigger
                          className={`${isActive(item.href) ? "bg-midnight-700 text-white" : "text-white"} transition-all duration-300 hover:text-crimson-300`}
                        >
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <motion.div
                            className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-midnight-600/95 backdrop-blur-sm border border-midnight-400 rounded-lg shadow-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-midnight-500 hover:text-crimson-300 focus:bg-midnight-500 focus:text-crimson-300"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {subItem.label}
                                </div>
                                {subItem.description && (
                                  <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                                    {subItem.description}
                                  </p>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }

                  // Otherwise render a simple link
                  return (
                    <NavigationMenuItem key={index}>
                      <Link
                        to={item.href}
                        className={`${navigationMenuTriggerStyle()} ${isActive(item.href) ? "bg-midnight-700 text-white" : "text-white"} transition-all duration-300 hover:text-crimson-300`}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Contact Info */}
            <motion.div
              className="ml-4 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="hidden md:flex items-center text-xs text-white mr-4">
                <Phone className="mr-1 h-3 w-3 text-crimson-300" />
                <span className="truncate">{contactPhone}</span>
              </div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  className="bg-crimson-500 hover:bg-crimson-600 shadow-md hover:shadow-lg transition-all duration-300 font-medium"
                >
                  <Link to="/contact" className="text-white flex items-center">
                    <Mail className="mr-1.5 h-3.5 w-3.5" /> Contact Us
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              className="p-2 rounded-md text-white hover:text-crimson-300 hover:bg-midnight-700 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mt-4 lg:hidden bg-midnight-600/95 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden border border-midnight-400"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-1 p-4">
                {menuItems.map((item, index) => (
                  <div key={index} className="py-2">
                    <Link
                      to={item.href}
                      className={`block text-base font-medium ${isActive(item.href) ? "text-crimson-300" : "text-white"} hover:text-crimson-300 transition-colors duration-300`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <motion.div
                        className="ml-4 mt-2 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.href}
                            className="block text-sm text-gray-300 hover:text-crimson-300 transition-colors duration-300"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="border-t border-midnight-400 p-4">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center text-sm text-white">
                    <Phone className="mr-2 h-4 w-4 text-crimson-400" />
                    <span>{contactPhone}</span>
                  </div>
                  <div className="flex items-center text-sm text-white">
                    <Mail className="mr-2 h-4 w-4 text-crimson-400" />
                    <span>{contactEmail}</span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      size="sm"
                      className="mt-2 w-full bg-crimson-500 hover:bg-crimson-600 shadow-md transition-all duration-300 font-medium"
                    >
                      <Link to="/contact" className="text-white">
                        Contact Us
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
