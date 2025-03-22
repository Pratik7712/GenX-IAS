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
    image: "/silder1.png",
    title: "Welcome to GenX IAS Institute",
    description: "we're serving at AHMEDABAD, VADODARA, BHAVNAGAR, KUTCH",
    ctaText: "Explore Courses",
    ctaLink: "#courses",
  },
  {
    id: 2,
    image: "/Silder2.jpg",
    title: "Our Student Our Future",
    description: "Learn from experienced educators with proven track records",
    ctaText: "Meet Our Faculty",
    ctaLink: "#faculty",
  },
  {
    id: 3,
    image: "/silder3.png",
    title: "Enroll now to secure your future",
    description: "Join the ranks of our successful students who achieved their dreams",
    ctaText: "View Success Stories",
    ctaLink: "#success-stories",
  },
];

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
    <section id="home" className="relative w-full overflow-hidden bg-gray-100">
      <div className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
        <Carousel className="w-full h-full" setApi={setApi}>
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={slide.id} className="overflow-hidden">
                <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
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
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 lg:px-16 text-white">
                    <motion.div
                      initial="hidden"
                      animate={activeIndex === index ? "visible" : "hidden"}
                      variants={fadeInUp}
                      className="mb-2 sm:mb-4"
                    >
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 font-heading text-white drop-shadow-lg">
                        {slide.title}
                      </h1>
                    </motion.div>

                    <motion.p
                      className="text-base sm:text-lg md:text-xl max-w-2xl mb-4 sm:mb-6 md:mb-8 text-white/90"
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
                            className="bg-crimson-500 hover:bg-crimson-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group font-medium px-5 sm:px-8 py-4 sm:py-6 text-sm sm:text-base"
                            asChild
                          >
                            <a
                              href={slide.ctaLink || "#"}
                              className="flex items-center"
                            >
                              {slide.ctaText}
                              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Decorative Elements - Hidden on mobile */}
                    <motion.div
                      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 hidden sm:block"
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

          {/* Navigation buttons - Position adjusts on mobile */}
          <CarouselPrevious className="left-2 sm:left-4 md:left-8 bg-midnight-600/30 hover:bg-midnight-600/50 border-none text-white shadow-lg hover:shadow-xl transition-all duration-300 hidden sm:flex h-8 w-8 sm:h-10 sm:w-10">
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </CarouselPrevious>

          <CarouselNext className="right-2 sm:right-4 md:right-8 bg-midnight-600/30 hover:bg-midnight-600/50 border-none text-white shadow-lg hover:shadow-xl transition-all duration-300 hidden sm:flex h-8 w-8 sm:h-10 sm:w-10">
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </CarouselNext>
        </Carousel>

        {/* Indicators - Adjusted for mobile */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 flex justify-center gap-2 sm:gap-3 z-20">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${activeIndex === index ? "w-8 sm:w-12 bg-crimson-500" : "bg-white/50 hover:bg-white/70"}`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
