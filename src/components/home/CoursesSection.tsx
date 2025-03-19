import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { Card, CardContent } from "../ui/card";
import { BookOpen, Clock, Award, Check } from "lucide-react";

interface CourseProps {
  title: string;
  description: string;
  duration: string;
  features: string[];
  image: string;
  price: string;
  popular?: boolean;
}

const CourseCard = ({
  title,
  description,
  duration,
  features,
  image,
  price,
  popular = false,
}: CourseProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="h-full"
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl border-midnight-200 relative h-full">
        {popular && (
          <div className="absolute top-0 right-0 z-10">
            <div className="bg-crimson-500 text-white text-xs font-bold py-1 px-3 tracking-wider transform rotate-45 translate-x-5 translate-y-3 shadow-md">
              POPULAR
            </div>
          </div>
        )}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-midnight-600">{title}</h3>
            <div className="flex items-center bg-midnight-50 px-3 py-1 rounded-full border border-midnight-100">
              <Clock className="h-4 w-4 text-crimson-500 mr-1" />
              <span className="text-xs font-medium text-gray-700">
                {duration}
              </span>
            </div>
          </div>

          <p className="text-gray-600 mb-4">{description}</p>

          <div className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-2 mt-1">
                  <Check className="h-4 w-4 text-crimson-500" />
                </div>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
            <div className="text-crimson-500 font-bold text-xl">{price}</div>
            <button className="px-4 py-2 bg-midnight-600 hover:bg-midnight-700 text-white rounded-md transition-colors duration-300 text-sm font-medium">
              Enroll Now
            </button>
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
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=500&q=80",
      price: "₹1,25,000",
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
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=80",
      price: "₹85,000",
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
      image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=500&q=80",
      price: "₹45,000",
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
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80",
      price: "₹65,000",
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
