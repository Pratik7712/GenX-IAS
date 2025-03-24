import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { Card, CardContent } from "../ui/card";
import { BookOpen, Clock, Award, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseProps {
  title: string;
  description: string;
  duration: string;
  features: string[];
  image: string;
  popular?: boolean;
}

const CourseCard = ({
  title,
  description,
  duration,
  features,
  image,
  popular,
}: CourseProps) => {
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
      <Card className="relative h-full overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-midnight-200">
        {popular && (
          <div className="absolute top-4 right-4 bg-crimson-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg z-20">
            Popular
          </div>
        )}
        <CardContent className="p-0 flex flex-col h-full">
          <div className="relative h-60 overflow-hidden bg-gray-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-600/20 to-transparent z-10"></div>
            <img
              src={image}
              alt={title}
              className="w-4/5 h-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-midnight-600 mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
              
              <div className="flex items-center mb-4 text-sm text-midnight-500">
                <Clock className="h-4 w-4 mr-2" />
                <span>{duration}</span>
              </div>

              <ul className="space-y-2 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-crimson-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const CoursesSection = () => {
  const courses: CourseProps[] = [
    {
      title: "UPSC CSE Comprehensive",
      description:
        "Complete preparation for all three stages of the UPSC Civil Services Examination.",
      duration: "12 Months",
      features: [
        "Covers entire UPSC syllabus",
        "Regular mock tests and evaluations",
        "One-on-one mentoring sessions",
        "Study materials included",
      ],
      image: "/UPSC_GenX.png",
      popular: true,
    },
    {
      title: "GPSC Foundation Course",
      description:
        "Comprehensive course for Gujarat Public Service Commission examinations.",
      duration: "9 Months",
      features: [
        "Gujarat-specific study material",
        "GPSC previous year papers analysis",
        "Weekly tests and discussions",
        "Personality development sessions",
      ],
      image: "/GPSC_GenX.png",
    },
    {
      title: "UPSC Interview Preparation",
      description:
        "Specialized coaching for clearing the UPSC personality test/interview.",
      duration: "3 Months",
      features: [
        "Mock interviews with experts",
        "Personality development sessions",
        "Current affairs discussions",
        "Detailed feedback after each session",
      ],
      image: "/UPSC_GenX.png",
    },
    {
      title: "UPSC Optional Subject",
      description:
        "In-depth coaching for optional subjects with subject matter experts.",
      duration: "6 Months",
      features: [
        "Subject-specific comprehensive notes",
        "Answer writing practice sessions",
        "One-on-one doubt clearing sessions",
        "Previous year questions analysis",
      ],
      image: "/UPSC_GenX.png",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-600 mb-3">
            Our Courses
          </h2>
          <div className="w-24 h-1 bg-crimson-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive courses designed to help you excel in civil services
            examinations with expert guidance and structured learning approach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-12 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <Award className="h-6 w-6 text-crimson-500 mr-2" />
            <span className="text-gray-700 font-medium">
              All courses include certification upon completion
            </span>
          </div>
          <a
            href="#contact"
            className="inline-block py-3 px-6 bg-crimson-500 hover:bg-crimson-600 text-white rounded-md transition-colors duration-300 font-medium"
          >
            Request Course Information
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
