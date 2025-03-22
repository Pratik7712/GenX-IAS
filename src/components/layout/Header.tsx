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
  contactPhone = "+91 7990661375",
  contactEmail = "genxias@gmail.com",
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Handle scroll event to update active section
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

    // Close mobile menu if it's open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  // Toggle submenu on mobile
  const toggleSubmenu = (href: string) => {
    if (activeSubmenu === href) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(href);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-midnight-600 text-white transition-all duration-300 ${
        scrolled ? "shadow-lg py-1" : "shadow-md py-2 sm:py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className={`overflow-hidden rounded-full transition-all duration-300 ${
                scrolled ? "h-10 w-10 sm:h-12 sm:w-12" : "h-12 w-12 sm:h-16 sm:w-16"
              }`}>
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
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {menuItems.map((item, index) => {
              // If the item has a submenu
              if (item.submenu) {
                return (
                  <div key={index} className="relative group">
                    <a
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className={`px-3 py-2 inline-block text-[15px] font-medium transition-all duration-300 ${
                        isActive(item.href)
                          ? "text-crimson-500 font-semibold"
                          : "text-white hover:text-crimson-300"
                      }`}
                    >
                      {item.label} <span className="ml-1">▾</span>
                    </a>
                    
                    {/* Dropdown menu */}
                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-midnight-600/95 backdrop-blur-sm border border-midnight-400 rounded-lg shadow-xl py-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            onClick={(e) => handleSmoothScroll(e, subItem.href)}
                            className={`block px-4 py-2 text-sm ${
                              isActive(subItem.href)
                                ? "text-crimson-500 font-semibold"
                                : "text-white/90 hover:bg-midnight-500 hover:text-crimson-300"
                            }`}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Simple menu item without submenu
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`px-3 py-2 inline-block text-[15px] font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-crimson-500 font-semibold"
                      : "text-white hover:text-crimson-300"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Phone number and Contact Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href={`tel:${contactPhone}`} className="flex items-center text-white hover:text-crimson-300 transition-colors">
              <Phone className="h-4 w-4 mr-2 text-crimson-400" /> {contactPhone}
            </a>
            <Button
              size="sm"
              className="bg-crimson-500 hover:bg-crimson-600 text-white"
            >
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="flex items-center"
              >
                Contact Us
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              className="p-2 rounded-md text-white hover:bg-midnight-500 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-midnight-600 overflow-y-auto"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-5 space-y-3 max-h-[70vh] overflow-y-auto">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-midnight-400 pb-2">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.href)}
                        className={`flex justify-between items-center w-full py-2 px-3 rounded-md ${
                          isActive(item.href) ? "text-crimson-500 font-semibold" : "text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`h-4 w-4 transition-transform ${
                            activeSubmenu === item.href ? "transform rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      
                      <AnimatePresence>
                        {activeSubmenu === item.href && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 mt-1 space-y-1"
                          >
                            {item.submenu.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.href}
                                onClick={(e) => handleSmoothScroll(e, subItem.href)}
                                className={`block py-2 px-3 rounded-md ${
                                  isActive(subItem.href)
                                    ? "text-crimson-500 font-semibold"
                                    : "text-white/90 hover:text-crimson-300"
                                }`}
                              >
                                {subItem.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className={`block py-2 px-3 rounded-md ${
                        isActive(item.href)
                          ? "text-crimson-500 font-semibold"
                          : "text-white hover:text-crimson-300"
                      }`}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile contact info */}
              <div className="pt-4 space-y-3">
                <a href={`tel:${contactPhone}`} className="flex items-center text-white/90 hover:text-white transition-colors px-3 py-2">
                  <Phone className="h-5 w-5 mr-3 text-crimson-400" /> {contactPhone}
                </a>
                <Button
                  size="sm" 
                  className="w-full bg-crimson-500 hover:bg-crimson-600 text-white"
                >
                  <a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, "#contact")}
                    className="flex items-center justify-center w-full"
                  >
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;