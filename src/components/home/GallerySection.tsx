import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { Camera, X } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&q=80",
      alt: "Campus Building",
      category: "campus",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=80",
      alt: "Classroom Session",
      category: "classroom",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1577896852418-3c18c386f2de?w=500&q=80",
      alt: "Library",
      category: "campus",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1588580000645-5661c9f2ddcc?w=500&q=80",
      alt: "Award Ceremony",
      category: "events",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=500&q=80",
      alt: "Group Discussion",
      category: "classroom",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=500&q=80",
      alt: "Seminar",
      category: "events",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1601807576163-587225545555?w=500&q=80",
      alt: "Computer Lab",
      category: "campus",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80",
      alt: "Guest Lecture",
      category: "events",
    },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "campus", label: "Campus" },
    { id: "classroom", label: "Classroom" },
    { id: "events", label: "Events" },
  ];

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-600 mb-3">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-crimson-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Take a glimpse into our world - explore our campus, classrooms, and
            special events through our gallery.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activeCategory === category.id
                    ? "bg-midnight-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              variants={fadeInUp}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer relative group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="text-white text-center p-2">
                    <div className="flex items-center justify-center mb-2">
                      <Camera className="h-5 w-5 mr-2" />
                      <span className="font-medium text-sm capitalize">
                        {image.category}
                      </span>
                    </div>
                    <p className="text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-crimson-500 transition-colors duration-200"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />
              <div className="text-white text-center mt-4">
                <p className="text-lg">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
