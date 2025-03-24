import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { Card, CardContent } from "../ui/card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialProps {
  name: string;
  text: string;
}

const Testimonial = ({ name, text }: TestimonialProps) => {
  return (
    <Card className="h-full overflow-hidden shadow-md bg-white border-midnight-100">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="relative flex-grow mb-4">
            <Quote className="h-8 w-8 text-crimson-200 absolute -top-1 -left-1" />
            <p className="text-gray-700 italic pl-6 relative z-10 mb-4">{text}</p>
          </div>
          
          <div className="mt-auto">
            <h3 className="text-lg font-bold text-midnight-600">{name}</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const SuccessStoriesSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials: TestimonialProps[] = [
    {
      name: "Abhishek Garg",
      text: "I highly recommend GenX IAS for its exceptional quality of education. In my experience, it stands out as a premier institution, offering best and updated knowledge, aligned with industry standards. Outstanding faculty, comprising highly qualified and experienced professionals. Supportive environment, fostering academic growth and success. Affordable pricing, making quality education accessible to all. Best place to gain quality education."
    },
    {
      name: "Chaudhary Anurag",
      text: "The teachers are very supportive and all concepts are explained in detail. Good atmosphere to stay and do self study. Highly recommend to consider GenX IAS for your desired job preparation."
    },
    {
      name: "Akansha Tripathi",
      text: "GenX IAS is undoubtedly the center that works on shaping futures on truths and quality knowledge rather than on fake motivation. Personally, a big thanks to the faculty for making me settle comfortably with the new environment very easily within a month's time."
    },
    {
      name: "Divyesh Pagi",
      text: "GenX IAS is one of the best centers of Ahemdabad for GPSC and UPSC as they provide the best guidance for competitive exams. A special mention goes to Shubham sir, who has a very deep knowledge of all the subjects and has a very effective teaching method as well. GenX IAS provides the best atmosphere for preparation."
    },
    {
      name: "Yug Barot",
      text: "GenX IAS is the best for UPSC and GPSC. The faculties of teachers are best and helpful to students to achieve dreams easily. The fees are very reasonable compared to other places. GenX IAS is not for making money it is for making future officers. Shubham Sir gives positive vibes and provides solutions to all problems."
    },
    {
      name: "Aditya Singh",
      text: "Best place for GPSC and UPSC. The teachers are very supportive and friendly in nature. Among them, Shubham sir's teaching skill is outstanding. Fees is very reasonable compared to other institutions."
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000); // Change slide every 5 seconds
      
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="success-stories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-600 mb-3">
            Success Stories
          </h2>
          <div className="w-24 h-1 bg-crimson-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from our students about their experience with GenX IAS.
            Their words speak volumes about our dedication to excellence.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto"
             onMouseEnter={() => setIsPaused(true)}
             onMouseLeave={() => setIsPaused(false)}>
          
          {/* Slides */}
          <div className="relative h-[300px] md:h-[250px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div key={index} 
                   className={`absolute inset-0 transition-all duration-500 transform ${
                     index === activeSlide 
                       ? "opacity-100 translate-x-0" 
                       : index < activeSlide 
                         ? "opacity-0 -translate-x-full" 
                         : "opacity-0 translate-x-full"
                   }`}>
                <Testimonial name={testimonial.name} text={testimonial.text} />
              </div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6 md:-translate-x-12 bg-white p-2 rounded-full shadow-md text-midnight-600 hover:text-crimson-500 transition-colors z-10"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6 md:translate-x-12 bg-white p-2 rounded-full shadow-md text-midnight-600 hover:text-crimson-500 transition-colors z-10"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeSlide 
                    ? "bg-crimson-500 w-6" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Join GenX IAS and become our next success story!
          </p>
          <a
            href="#contact"
            className="inline-block py-3 px-6 bg-crimson-500 hover:bg-crimson-600 text-white rounded-md transition-colors duration-300 font-medium"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;

