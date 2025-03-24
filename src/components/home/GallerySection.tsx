import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { X } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/G1.jpg",
      alt: "GenX IAS Event",
      category: "events",
    },
    {
      id: 2,
      src: "/G2.jpg",
      alt: "Student Gathering",
      category: "events",
    },
    {
      id: 3,
      src: "/G3.jpg",
      alt: "Cultural Program",
      category: "events",
    },
    {
      id: 4,
      src: "/G4.jpg",
      alt: "Classroom Session",
      category: "classroom",
    },
    {
      id: 5,
      src: "/G5.jpg",
      alt: "Lecture Session",
      category: "classroom",
    },
    {
      id: 6,
      src: "/G6.png",
      alt: "Award Ceremony",
      category: "events",
    },
  ];

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

        {/* Gallery Grid */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image) => (
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
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;



