import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { Card, CardContent } from "../ui/card";
import { LinkedinIcon, BookOpen, Award } from "lucide-react";

interface FacultyMemberProps {
  name: string;
  role: string;
  qualifications: string;
  experience: string;
  specialization: string;
  achievements: string[];
  imageUrl: string;
}

const FacultyCard = ({
  name,
  role,
  qualifications,
  experience,
  specialization,
  achievements,
  imageUrl,
}: FacultyMemberProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <Card className="overflow-hidden bg-white hover:shadow-xl transition-all duration-300 h-full border-midnight-200">
        <CardContent className="p-0">
          <div className="md:flex">
            <div className="md:w-1/3 relative">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-contain md:object-cover object-center aspect-square"
                style={{ objectPosition: name === "Mr. Bilal Ahmed" ? "center top" : "center" }}
              />
            </div>
            <div className="md:w-2/3 p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-midnight-600">{name}</h3>
                <p className="text-crimson-500 font-medium">{role}</p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex">
                  <span className="font-medium text-midnight-600 w-28">Qualifications:</span>
                  <span className="text-gray-700">{qualifications}</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-midnight-600 w-28">Experience:</span>
                  <span className="text-gray-700">{experience}</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-midnight-600 w-28">Specialization:</span>
                  <span className="text-gray-700">{specialization}</span>
                </div>
              </div>

              <div className="mt-4">
                <span className="font-medium text-midnight-600 text-sm">Key Achievements:</span>
                <ul className="mt-2 space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="h-4 w-4 text-crimson-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FacultySection = () => {
  const facultyMembers: FacultyMemberProps[] = [
    {
      name: "Mr. Shubham Pandey",
      role: "Director & UPSC Expert",
      qualifications: "B.Tech Software Engineer",
      experience: "12+ years",
      specialization: "Indian Polity & Governance, Public Administration, Economy",
      achievements: [
        "Expert in Indian Polity & Governance",
        "Specialist in Public Administration",
        "Economy expert for civil services"
      ],
      imageUrl: "/Shubham Pandey.jpg",
    },
    {
      name: "Ms. Shradhha Solanki",
      role: "Managing Director",
      qualifications: "Phd. Botany",
      experience: "5+ years",
      specialization: "Science and Technology",
      achievements: [
        "Science and Technology expert",
        "Specialized curriculum development",
        "Research in botanical sciences"
      ],
      imageUrl: "/Shradhha Solanki.jpg",
    },
    {
      name: "Mr. Pruthvirajsinh",
      role: "Faculty",
      qualifications: "Regional Expert",
      experience: "5+ years",
      specialization: "Gujarat History, Gujarat Culture, Gujarat Geography",
      achievements: [
        "Expert in Gujarat History",
        "Specialist in regional culture studies",
        "Regional geography consultant"
      ],
      imageUrl: "/Pruthvirajsinh.jpg",
    },
    {
      name: "Mr. Bilal Ahmed",
      role: "Faculty",
      qualifications: "Police Inspector (Class 2), Gujarat Police",
      experience: "5+ years",
      specialization: "Ethics, History",
      achievements: [
        "Experienced law enforcement professional",
        "Ethics and moral philosophy expert",
        "Historical studies specialist"
      ],
      imageUrl: "/Bilal_Ahmed.jpg",
    },
    {
      name: "Azad Katta",
      role: "Faculty",
      qualifications: "Engineer",
      experience: "5+ years",
      specialization: "Geography",
      achievements: [
        "Geography specialist",
        "Cartography expert",
        "Developed specialized geography curriculum"
      ],
      imageUrl: "/Azad Katta.jpg",
    },
    {
      name: "Dr. Ami Prajapati",
      role: "Faculty",
      qualifications: "Doctor",
      experience: "5+ years",
      specialization: "Environment",
      achievements: [
        "Environmental science specialist",
        "Medical professional with environmental expertise",
        "Environmental policy consultant"
      ],
      imageUrl: "/Ami Prajapati.jpg",
    },
  ];

  return (
    <section id="faculty" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-600 mb-3">
            Our Expert Faculty
          </h2>
          <div className="w-24 h-1 bg-crimson-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Learn from the best minds in the field - our faculty comprises
            former civil servants, subject experts, and experienced educators.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {facultyMembers.map((faculty, index) => (
            <FacultyCard key={index} {...faculty} />
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
            <BookOpen className="h-6 w-6 text-crimson-500 mr-2" />
            <span className="text-gray-700 font-medium">
              Our faculty conducts regular workshops and seminars
            </span>
          </div>
          <a
            href="#contact"
            className="inline-block py-3 px-6 bg-crimson-500 hover:bg-crimson-600 text-white rounded-md transition-colors duration-300 font-medium"
          >
            Get in Touch with Our Faculty
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FacultySection;

