import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { Card, CardContent } from "../ui/card";
import { Quote, Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  text: string;
}

const Testimonial = ({ name, text }: TestimonialProps) => {
  // For longer text, we'll truncate it on mobile
  const isTruncatable = text.length > 150;
  
  return (
    <Card className="h-full overflow-hidden shadow-md bg-white border border-[#FF0000] hover:shadow-lg transition-all duration-300 flex flex-col group w-[300px] flex-shrink-0 mx-[10px] rounded-lg">
      {/* Accent color stripe */}
      <div className="h-2 bg-gradient-to-r from-[#FF0000] to-[#FF0000]/80"></div>
      
      <CardContent className="p-5 md:p-6 flex flex-col flex-grow">
        {/* Star rating */}
        <div className="flex mb-3 text-yellow-400">
          {Array(5).fill(0).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        
        <div className="relative flex-grow mb-4">
          <Quote className="h-8 w-8 text-crimson-200 absolute -top-1 -left-1 opacity-70 group-hover:text-crimson-300 transition-colors" />
          <p className={`text-[#1E2A36] italic pl-6 relative z-10 mb-4 text-sm md:text-base ${
            isTruncatable ? 'line-clamp-4 sm:line-clamp-5 md:line-clamp-6' : ''
          }`}>
            {text}
          </p>
          {isTruncatable && (
            <span className="text-xs text-[#FF0000] font-medium pl-6 block md:hidden">Read more</span>
          )}
        </div>
        
        <div className="mt-auto pt-3 border-t border-gray-100">
          <h3 className="text-lg font-bold text-[#1E2A36] group-hover:text-[#FF0000] transition-colors">{name}</h3>
          <p className="text-xs text-gray-500">GenX IAS Student</p>
        </div>
      </CardContent>
    </Card>
  );
};

const SuccessStoriesSection = () => {
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  
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

  return (
    <section id="success-stories" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A36] mb-3">
            Student Reviews
          </h2>
          <div className="w-24 h-1 bg-[#FF0000] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from our students about their experience with GenX IAS.
            Their success stories reflect our commitment to excellence.
          </p>
        </motion.div>

        {/* Mobile Stacked View (visible only on very small screens) */}
        <div className="block sm:hidden">
          <div className="px-4 space-y-4">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="w-full">
                <Testimonial name={testimonial.name} text={testimonial.text} />
              </div>
            ))}
            <div className="text-center mt-2">
              <a href="#contact" className="text-[#FF0000] text-sm font-medium">
                See more reviews →
              </a>
            </div>
          </div>
        </div>

        {/* Marquee Animation (hidden on small screens) */}
        <div className="hidden sm:block relative">
          {/* CSS Animation */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-300px * 6 - 120px)); }
            }
            
            .marquee-content {
              will-change: transform;
              display: flex;
              gap: 20px;
              padding-right: 20px;
              animation: marquee 40s linear infinite;
            }
            
            .marquee-container:hover .marquee-content {
              animation-play-state: paused;
            }
            
            .marquee-container::after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              pointer-events: none;
              background: rgba(255,255,255,0);
              transition: background 0.3s ease;
              z-index: 1;
            }
            
            .marquee-container:hover::after {
              background: rgba(255,255,255,0.03);
            }
            
            /* Responsive container widths */
            @media (min-width: 640px) and (max-width: 767px) {
              .marquee-wrapper {
                width: calc(300px * 1 + 20px);
                margin: 0 auto;
                overflow: hidden;
              }
            }
            
            @media (min-width: 768px) and (max-width: 1023px) {
              .marquee-wrapper {
                width: calc(300px * 2 + 20px);
                margin: 0 auto;
                overflow: hidden;
              }
            }
            
            @media (min-width: 1024px) {
              .marquee-wrapper {
                width: calc(300px * 3 + 40px);
                margin: 0 auto;
                overflow: hidden;
              }
            }
            
            /* Responsive animation speed */
            @media (min-width: 640px) and (max-width: 767px) {
              .marquee-content {
                animation-duration: 20s !important;
              }
            }
            
            @media (min-width: 768px) and (max-width: 1023px) {
              .marquee-content {
                animation-duration: 25s !important;
              }
            }
            
            @media (min-width: 1024px) {
              .marquee-content {
                animation-duration: 30s !important;
              }
            }
          `}} />
          
          {/* Responsive Marquee Container - Shows precise number of cards */}
          <div className="marquee-wrapper relative">
            <div 
              className="marquee-container overflow-hidden relative rounded-lg py-2"
              onMouseEnter={() => setIsMarqueePaused(true)}
              onMouseLeave={() => setIsMarqueePaused(false)}
            >
              <div 
                className="marquee-content"
                style={{
                  animationPlayState: isMarqueePaused ? "paused" : "running",
                }}
              >
                {/* All cards in a continuous row */}
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0">
                    <Testimonial name={testimonial.name} text={testimonial.text} />
                  </div>
                ))}
                {/* Duplicate set for seamless looping */}
                {testimonials.map((testimonial, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0">
                    <Testimonial name={testimonial.name} text={testimonial.text} />
                  </div>
                ))}
              </div>
              
              {/* Edge gradient overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-10 md:mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Join GenX IAS and become our next success story!
          </p>
          <a
            href="#contact"
            className="inline-block py-3 px-6 bg-[#FF0000] hover:bg-[#e60000] text-white rounded-md transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;

