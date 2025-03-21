import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HeroSlider from "./home/HeroSlider";
import AboutSection from "./home/AboutSection";
import CoursesSection from "./home/CoursesSection";
import BatchesSection from "./home/BatchesSection";
import FacultySection from "./home/FacultySection";
import SuccessStoriesSection from "./home/SuccessStoriesSection";
import GallerySection from "./home/GallerySection";
import AppSection from "./home/AppSection";
import ContactSection from "./home/ContactSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <CoursesSection />
        <BatchesSection />
        <FacultySection />
        <SuccessStoriesSection />
        <GallerySection />
        <AppSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
