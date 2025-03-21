import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { Check, BookOpen, ClipboardCheck } from "lucide-react";

interface ProfileProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const Profile = ({
  name = "John Doe",
  role = "Role",
  bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  imageUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
}: ProfileProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <Card className="overflow-hidden bg-white border-midnight-200 hover:shadow-xl transition-all duration-300 h-full">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-36 w-36 mb-5 border-2 border-crimson-500 shadow-lg">
              <AvatarImage src={imageUrl} alt={name} style={{ objectFit: 'contain' }} />
              <AvatarFallback className="bg-midnight-100 text-midnight-600">
                {name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-bold text-midnight-600 mb-1">
              {name}
            </h3>
            <p className="text-crimson-500 font-medium mb-4">{role}</p>
            <p className="text-gray-600 leading-relaxed">{bio}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface AboutSectionProps {
  visionMission?: string;
  academyOverview?: string;
  founderProfile?: ProfileProps;
  directorProfile?: ProfileProps;
}

const AboutSection = ({
  visionMission = "Our vision is to be the premier institute for civil services preparation, empowering aspirants to achieve excellence through quality education, personalized guidance, and comprehensive study materials. We are committed to nurturing future leaders who will serve the nation with integrity and dedication.",
  academyOverview = "GenX IAS Institute is a leading coaching institute dedicated to preparing students for UPSC, GPSC, and other competitive examinations. With state-of-the-art facilities, experienced faculty, and a proven track record of success, we provide comprehensive coaching programs tailored to meet the needs of civil service aspirants.",
  founderProfile = {
    name: "Mr. Shubham Pandey",
    role: "Founder",
    bio: "Mr. Shubham Pandey is a visionary educator with extensive experience in civil services coaching. With his deep understanding of the examination pattern and requirements, he has guided numerous students to success in UPSC and GPSC examinations.",
    imageUrl:
      "/Shubham Pandey.jpg",
  },
  directorProfile = {
    name: "Ms. Shradhha Solanki",
    role: "Managing Director",
    bio: "Ms. Shradhha Solanki brings her expertise in educational management to GenX IAS Institute. Her strategic leadership and commitment to excellence have been instrumental in establishing the institute as a premier institution for civil services preparation.",
    imageUrl:
      "/Shradhha Solanki.jpg",
  },
}: AboutSectionProps) => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-midnight-50 to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-midnight-600 mb-3">
              About GenX IAS Institute
            </h2>
            <div className="w-24 h-1 bg-crimson-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Empowering aspirants to achieve excellence in civil services
              examinations through quality education and mentorship.
            </p>
          </motion.div>
        </div>

        {/* Integrated About Section with Vision, Mission, and Overview */}
        <div className="mb-16">
          <Card className="overflow-hidden border-none shadow-2xl bg-white">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left side with image and Vision & Mission */}
                <div className="relative h-full min-h-[400px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-midnight-600/90 to-midnight-500/80 z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80"
                    alt="Institute Building"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 text-white">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                    >
                      <h3 className="text-2xl font-bold mb-4 text-white">
                        Vision & Mission
                      </h3>
                      <div className="w-16 h-1 bg-crimson-500 mb-4"></div>
                      <p className="text-white/90 leading-relaxed">
                        {visionMission}
                      </p>

                      {/* Decorative element */}
                      <div className="absolute bottom-8 right-8 opacity-20">
                        <svg
                          width="120"
                          height="120"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 6V12L16 14"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Right side with overview */}
                <div className="p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                  >
                    <h3 className="text-2xl font-bold text-midnight-600 mb-4">
                      Institute Overview
                    </h3>
                    <div className="w-16 h-1 bg-crimson-500 mb-4"></div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {academyOverview}
                    </p>

                    <div className="flex flex-wrap gap-6">
                      <div className="flex-1 min-w-[250px] items-center bg-midnight-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-midnight-100">
                        <div className="flex items-center">
                          <div className="w-14 h-14 bg-midnight-100 rounded-full flex items-center justify-center mr-4 text-crimson-500">
                            <Check className="h-7 w-7" />
                          </div>
                          <span className="text-midnight-600 font-medium">
                            Expert Faculty
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-[250px] items-center bg-midnight-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-midnight-100">
                        <div className="flex items-center">
                          <div className="w-14 h-14 bg-midnight-100 rounded-full flex items-center justify-center mr-4 text-crimson-500">
                            <BookOpen className="h-7 w-7" />
                          </div>
                          <span className="text-midnight-600 font-medium">
                            Comprehensive Study Material
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-[250px] items-center bg-midnight-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-midnight-100">
                        <div className="flex items-center">
                          <div className="w-14 h-14 bg-midnight-100 rounded-full flex items-center justify-center mr-4 text-crimson-500">
                            <ClipboardCheck className="h-7 w-7" />
                          </div>
                          <span className="text-midnight-600 font-medium">
                            Regular Test Series
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Director's Desk Section */}
        <div className="bg-white py-12 px-6 rounded-xl shadow-lg mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-midnight-600 mb-8 text-center">
            Director's Desk
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Profile
              name={founderProfile.name}
              role={founderProfile.role}
              bio={founderProfile.bio}
              imageUrl={founderProfile.imageUrl}
            />
            <Profile
              name={directorProfile.name}
              role={directorProfile.role}
              bio={directorProfile.bio}
              imageUrl={directorProfile.imageUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
