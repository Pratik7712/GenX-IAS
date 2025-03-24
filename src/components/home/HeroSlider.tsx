import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { fadeIn, fadeInUp } from "@/lib/animations";
import OptimizedImage from "@/components/OptimizedImage";

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
    title: "Welcome to <span class='text-[#ED344C]'>GenX IAS</span>",
    description: "we're serving at AHMEDABAD, VADODARA, BHAVNAGAR, KUTCH",
    ctaText: "Explore Courses",
    ctaLink: "#courses",
  },
  {
    id: 2,
    image: "/Silder2.jpg",
    title: "Our Students<br/>Our Future",
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

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (api) {
        const nextIndex = (activeIndex + 1) % slides.length;
        api.scrollTo(nextIndex);
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [activeIndex, api, slides.length]);

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
                  {/* Background Image with Parallax Effect - Using OptimizedImage */}
                  <div className="absolute inset-0">
                    <OptimizedImage
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      width={1920}
                      height={1080}
                      className="w-full h-full"
                      imgClassName="object-cover"
                      quality={85}
                      priority={index === 0}
                      blurEffect={true}
                      role="hero"
                    />
                    {/* Overlay with Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-midnight-600/90 via-midnight-500/80 to-midnight-500/70"></div>
                  </div>

                  {/* Content - Left Aligned */}
                  <div className="relative z-10 flex flex-col justify-center h-full text-left px-8 md:px-16 lg:px-24 text-white">
                    <motion.div
                      initial="hidden"
                      animate={activeIndex === index ? "visible" : "hidden"}
                      variants={fadeInUp}
                      className="mb-2 sm:mb-4 max-w-2xl"
                    >
                      <h1 
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-4 font-heading text-white leading-tight"
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      ></h1>
                    </motion.div>

                    <motion.p
                      className="text-base sm:text-lg md:text-xl max-w-xl mb-6 sm:mb-8 md:mb-10 text-white/90"
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
                          whileHover={{ scale: 1.05, y: -3 }}
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
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
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
