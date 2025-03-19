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
                className="w-full h-full object-cover object-center aspect-square"
              />
              <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                <a
                  href="#"
                  className="text-midnight-600 hover:text-crimson-500 transition-colors"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
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
      name: "Dr. Rajiv Mehta",
      role: "Director & UPSC Expert",
      qualifications: "Ph.D. in Political Science, IAS (Retd.)",
      experience: "20+ years",
      specialization: "Indian Polity & Governance",
      achievements: [
        "Former Secretary to Government of India",
        "Author of 5 books on Indian Administration",
        "Mentored over 200 successful civil services candidates",
      ],
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    },
    {
      name: "Prof. Anjali Sharma",
      role: "Economics Faculty",
      qualifications: "M.A. Economics, Delhi School of Economics",
      experience: "15+ years",
      specialization: "Indian Economy & International Relations",
      achievements: [
        "Visiting faculty at top universities",
        "Consultant to various economic think tanks",
        "Published research papers in international journals",
      ],
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    },
    {
      name: "Prof. Sanjay Verma",
      role: "History & Culture Expert",
      qualifications: "M.Phil in Ancient Indian History",
      experience: "18+ years",
      specialization: "Indian History & Cultural Heritage",
      achievements: [
        "Former UGC Research Fellow",
        "Authored comprehensive study materials for UPSC History",
        "Cultural consultant to Archaeological Survey of India",
      ],
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    },
    {
      name: "Dr. Meera Patel",
      role: "Science & Technology Faculty",
      qualifications: "Ph.D. in Environmental Sciences, IFS (Retd.)",
      experience: "12+ years",
      specialization: "Environment & Ecology, Science & Technology",
      achievements: [
        "Former Forest Officer with expertise in environmental policies",
        "Member of Climate Change advisory panels",
        "Developed specialized curriculum for civil services aspirants",
      ],
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
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
