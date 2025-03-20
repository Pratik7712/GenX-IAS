import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { fadeIn, fadeInUp } from "@/lib/animations";

interface HeroSliderProps {
  slides?: {
    id: number;
    image: string;
    title: string;
    description: string;
    ctaText?: string;
    ctaLink?: string;
  }[];
}

const defaultSlides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
    title: "Welcome to GenX IAS Institute",
    description:
      "we're serving at AHMEDABAD, VADODARA, BHAVNAGAR, KUTCH",
    ctaText: "Explore Courses",
    ctaLink: "#courses",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200&q=80",
    title: "Our Student Our Future",
    // description: "Learn from experienced educators with proven track records",
    // ctaText: "Meet Our Faculty",
    // ctaLink: "#faculty",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80",
    title: "Enroll now to scroll into your future",
    // description:
    //   "Join the ranks of our successful students who achieved their dreams",
    // ctaText: "View Success Stories",
    // ctaLink: "#success-stories",
  },
];

// Particle animation component
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-midnight-600/50 to-midnight-500/40"></div>
      {Array.from({ length: 60 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-white rounded-full opacity-70"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.3,
          }}
          animate={{
            y: [null, "-20%"],
            opacity: [null, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const HeroSlider: React.FC<HeroSliderProps> = ({ slides = defaultSlides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full h-[700px] bg-gray-100 overflow-hidden">
      <Carousel className="w-full h-full" setApi={setApi}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <div className="relative w-full h-[700px] overflow-hidden">
                {/* Background Image with Parallax Effect */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  initial={{ scale: 1.1 }}
                  animate={{
                    scale: activeIndex === index ? 1 : 1.1,
                    y: activeIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 6, ease: "easeOut" }}
                >
                  {/* Overlay with Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-midnight-600/80 via-midnight-500/70 to-midnight-500/80"></div>

                  {/* Particle Effect */}
                  <ParticleBackground />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 lg:px-16 text-white">
                  <motion.div
                    initial="hidden"
                    animate={activeIndex === index ? "visible" : "hidden"}
                    variants={fadeInUp}
                    className="mb-4"
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading text-white drop-shadow-lg">
                      {slide.title}
                    </h1>
                  </motion.div>

                  <motion.p
                    className="text-lg md:text-xl max-w-2xl mb-8 text-white/90"
                    initial="hidden"
                    animate={activeIndex === index ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                  >
                    {slide.description}
                  </motion.p>

                  {slide.ctaText && (
                    <motion.div
                      initial="hidden"
                      animate={activeIndex === index ? "visible" : "hidden"}
                      variants={fadeInUp}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <Button
                          size="lg"
                          className="bg-crimson-500 hover:bg-crimson-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group font-medium px-8 py-6"
                          asChild
                        >
                          <a
                            href={slide.ctaLink || "#"}
                            className="flex items-center"
                          >
                            {slide.ctaText}
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </a>
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-20 h-20"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full text-white/20"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-8 bg-midnight-600/30 hover:bg-midnight-600/50 border-none text-white shadow-lg hover:shadow-xl transition-all duration-300">
          <ChevronLeft className="h-6 w-6" />
        </CarouselPrevious>

        <CarouselNext className="right-8 bg-midnight-600/30 hover:bg-midnight-600/50 border-none text-white shadow-lg hover:shadow-xl transition-all duration-300">
          <ChevronRight className="h-6 w-6" />
        </CarouselNext>
      </Carousel>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? "w-12 bg-crimson-500" : "bg-white/50 hover:bg-white/70"}`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
