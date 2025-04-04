import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { Card, CardContent } from "../ui/card";
import { CalendarClock, Users, Clock, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface BatchProps {
  title: string;
  startDate: string;
  duration: string;
  slots: number;
  isPopular?: boolean;
}

const BatchCard = ({
  title,
  startDate,
  duration,
  slots,
  isPopular = false,
}: BatchProps) => {
  const handleEnrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="h-full"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl border-midnight-200 bg-white relative flex flex-col">
        {isPopular && (
          <div className="absolute top-0 right-0">
            <div className="bg-crimson-500 text-white text-xs uppercase font-bold py-1 px-3 tracking-wider transform rotate-45 translate-x-5 translate-y-3 shadow-md">
              Popular
            </div>
          </div>
        )}
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-midnight-600 mb-4">{title}</h3>
            
            <div className="space-y-3 mb-5">
              <div className="flex items-center">
                <CalendarClock className="h-5 w-5 text-crimson-500 mr-3" />
                <span className="text-gray-700">Starts: {startDate}</span>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-crimson-500 mr-3" />
                <span className="text-gray-700">Duration: {duration}</span>
              </div>
              
              <div className="flex items-center">
                <Users className="h-5 w-5 text-crimson-500 mr-3" />
                <span className="text-gray-700">Available Slots: {slots}</span>
              </div>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-auto"
          >
            <Button
              className="w-full bg-crimson-500 hover:bg-crimson-600 text-white shadow-md hover:shadow-lg transition-all duration-300 py-6 text-base font-medium group"
              asChild
            >
              <a
                href="#contact"
                onClick={handleEnrollClick}
                className="flex items-center justify-center"
              >
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const BatchesSection = () => {
  const batches = [
    {
      title: "UPSC CSE Comprehensive Batch",
      startDate: "August 15, 2025",
      duration: "12 months",
      slots: 40,
      isPopular: true,
    },
    {
      title: "GPSC Special Batch",
      startDate: "September 5, 2025",
      duration: "9 months",
      slots: 35,
    },
    {
      title: "UPSC Weekend Batch",
      startDate: "August 20, 2025",
      duration: "15 months",
      slots: 25,
    },
    {
      title: "UPSC Foundation Course",
      startDate: "October 10, 2025",
      duration: "6 months",
      slots: 50,
    },
  ];

  return (
    <section id="batches" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-600 mb-3">
            Upcoming Batches
          </h2>
          <div className="w-24 h-1 bg-crimson-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Join our upcoming batches and start your journey towards civil
            services success. Limited seats available!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {batches.map((batch, index) => (
            <BatchCard
              key={index}
              title={batch.title}
              startDate={batch.startDate}
              duration={batch.duration}
              slots={batch.slots}
              isPopular={batch.isPopular}
            />
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Can't find a suitable batch? Contact us for personalized options.
          </p>
          <a
            href="#contact"
            className="inline-block py-3 px-6 bg-crimson-500 hover:bg-crimson-600 text-white rounded-md transition-colors duration-300 font-medium"
          >
            Request Custom Schedule
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BatchesSection;
