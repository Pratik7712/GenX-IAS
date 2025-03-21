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
    { label: "Home", href: "#home" },
    {
      label: "About",
      href: "#about",
      submenu: [
        {
          label: "Institute Overview",
          href: "#overview",
          description: "Learn about our institute and its history",
        },
        {
          label: "Vision & Mission",
          href: "#vision",
          description: "Our guiding principles and goals",
        },
        {
          label: "Founder",
          href: "#founder",
          description: "Meet Mr. Shubham Pandey, our founder",
        },
        {
          label: "Managing Director",
          href: "#director",
          description: "Meet Ms. Shradhha Solanki, our managing director",
        },
      ],
    },
    {
      label: "Courses",
      href: "#courses",
      submenu: [
        {
          label: "UPSC Program",
          href: "#upsc",
          description: "Comprehensive preparation for UPSC exams",
        },
        {
          label: "GPSC Program",
          href: "#gpsc",
          description: "Specialized coaching for GPSC exams",
        },
        {
          label: "PI Program",
          href: "#pi",
          description: "Personal Interview preparation program",
        },
        {
          label: "PSI/CONSTABLE Program",
          href: "#psi",
          description: "Training for PSI and Constable exams",
        },
        {
          label: "CCE Program",
          href: "#cce",
          description: "Combined Competitive Examination preparation",
        },
      ],
    },
    { label: "Batches", href: "#batches" },
    { label: "Faculty", href: "#faculty" },
    { label: "Success Stories", href: "#success-stories" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
  contactPhone = "7990661375",
  contactEmail = "genxias@gmail.com",
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home"); // Initialize with #home

  // Handle scroll event to shrink navbar and update active section
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

  // Add smooth scrolling function and set active section on click
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

    // Close mobile menu if it's open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-b from-midnight-600 to-midnight-500 text-white backdrop-blur-sm transition-all duration-300 ${
        scrolled ? "shadow-lg py-1" : "shadow-md py-3"
      }`}
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
              <div
                className={`overflow-hidden rounded-full border-2 border-crimson-300 p-1 transition-all duration-300 ${
                  scrolled ? "h-16 w-16" : "h-20 w-20"
                }`}
              >
                <img
                  src="/GENX IAS LOGO.png"
                  alt="GenX IAS Institute"
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
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <NavigationMenu className="mr-4">
              <NavigationMenuList className="space-x-2">
                {menuItems.map((item, index) => {
                  // If the item has a submenu, render a dropdown
                  if (item.submenu) {
                    return (
                      <NavigationMenuItem
                        key={index}
                        className={index === 0 ? "mr-8" : ""}
                      >
                        <NavigationMenuTrigger
                          className={`${
                            isActive(item.href)
                              ? "text-[#ED344C] font-semibold"
                              : "text-white"
                          } transition-all duration-300 bg-transparent text-[16px] tracking-wide hover:bg-transparent hover:text-[#ED344C]`}
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
                              <a
                                key={subIndex}
                                href={subItem.href}
                                onClick={(e) =>
                                  handleSmoothScroll(e, subItem.href)
                                }
                                className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 ${
                                  isActive(subItem.href)
                                    ? "text-[#ED344C] font-semibold"
                                    : "text-white"
                                } hover:bg-midnight-500/30 hover:text-[#ED344C] !hover:text-[#ED344C] text-[15px]`}
                              >
                                <div className="text-[15px] font-medium leading-none">
                                  {subItem.label}
                                </div>
                                {subItem.description && (
                                  <p className="line-clamp-2 text-sm leading-snug text-gray-300 mt-2">
                                    {subItem.description}
                                  </p>
                                )}
                              </a>
                            ))}
                          </motion.div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }

                  // Otherwise render a simple link
                  return (
                    <NavigationMenuItem
                      key={index}
                      className={index === 0 ? "mr-8" : ""}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                        className={`${navigationMenuTriggerStyle()} ${
                          isActive(item.href)
                            ? "text-[#ED344C] font-semibold"
                            : "text-white"
                        } transition-all duration-300 bg-transparent text-[16px] tracking-wide hover:text-[#ED344C] !hover:text-[#ED344C] hover:bg-transparent`}
                      >
                        {item.label}
                      </a>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Contact Info */}
            <motion.div
              className="ml-8 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="hidden md:flex items-center text-xs text-white mr-4">
                <Phone className="mr-1 h-3 w-3 text-[#ED344C]" />
                <span className="truncate">{contactPhone}</span>
              </div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  className="bg-[#ED344C] hover:bg-[#ED344C]/80 shadow-md hover:shadow-lg transition-all duration-300 font-medium"
                >
                  <a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, "#contact")}
                    className="text-white flex items-center"
                  >
                    <Mail className="mr-1.5 h-3.5 w-3.5" /> Contact Us
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              className="p-2 rounded-md text-white hover:text-[#ED344C] hover:bg-midnight-700 transition-colors duration-300"
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
                  <div
                    key={index}
                    className={`py-2 ${index === 0 ? "mb-2" : ""}`}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className={`block text-[16px] ${
                        isActive(item.href)
                          ? "text-[#ED344C] font-semibold"
                          : "text-white"
                      } hover:text-[#ED344C] transition-all duration-300 tracking-wide`}
                    >
                      {item.label}
                    </a>
                    {item.submenu && (
                      <motion.div
                        className="ml-4 mt-3 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            onClick={(e) => handleSmoothScroll(e, subItem.href)}
                            className={`block text-[15px] ${
                              isActive(subItem.href)
                                ? "text-[#ED344C] font-semibold"
                                : "text-gray-300"
                            } hover:text-[#ED344C] transition-all duration-300`}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="border-t border-midnight-400 p-4">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center text-sm text-white">
                    <Phone className="mr-2 h-4 w-4 text-[#ED344C]" />
                    <span>{contactPhone}</span>
                  </div>
                  <div className="flex items-center text-sm text-white">
                    <Mail className="mr-2 h-4 w-4 text-[#ED344C]" />
                    <span>{contactEmail}</span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      size="sm"
                      className="mt-2 w-full bg-[#ED344C] hover:bg-[#ED344C]/80 shadow-md transition-all duration-300 font-medium"
                    >
                      <a
                        href="#contact"
                        onClick={(e) => handleSmoothScroll(e, "#contact")}
                        className="text-white"
                      >
                        Contact Us
                      </a>
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