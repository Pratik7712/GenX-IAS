import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";
import { Check, BookOpen, ClipboardCheck, MapPin } from "lucide-react";

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
  visionMission = "Our vision is to be the premier academy for civil services preparation, empowering aspirants to achieve excellence through quality education, personalized guidance, and comprehensive study materials. We are committed to nurturing future leaders who will serve the nation with integrity and dedication.",
  academyOverview = "GenX IAS is a leading coaching academy dedicated to preparing students for UPSC, GPSC, and other competitive examinations. With state-of-the-art facilities, experienced faculty, and a proven track record of success, we provide comprehensive coaching programs tailored to meet the needs of civil service aspirants.",
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
    bio: "Ms. Shradhha Solanki brings her expertise in educational management to GenX IAS. Her strategic leadership and commitment to excellence have been instrumental in establishing the academy as a premier destination for civil services preparation.",
    imageUrl:
      "/Shradhha Solanki.jpg",
  },
}: AboutSectionProps) => {
  const textAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const animateText = (text: string) => {
    return (
      <motion.div variants={textAnimation} className="inline-block">
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letterAnimation} className="inline-block">
            {char}
          </motion.span>
        ))}
      </motion.div>
    );
  };

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
              About GenX IAS
            </h2>
            <div className="w-24 h-1 bg-crimson-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Empowering aspirants to achieve excellence in civil services
              examinations through quality education and mentorship.
            </p>
          </motion.div>
        </div>

        {/* Unified About Section */}
        <div className="mb-16">
          <Card className="overflow-hidden border-none shadow-2xl bg-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h3 className="text-2xl font-bold text-midnight-600 mb-4">
                    {animateText("About Our Academy")}
                  </h3>
                  <div className="w-16 h-1 bg-crimson-500 mb-6"></div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {visionMission}
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {academyOverview}
                  </p>

                  <div className="flex flex-wrap gap-6 mb-6">
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
                
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="flex justify-center items-center"
                >
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img
                      src="/GenxMap.jpg"
                      alt="GenX IAS Locations"
                      className="w-full h-auto"
                    />
                    <div className="bg-midnight-600 text-white p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <MapPin className="h-5 w-5 mr-2 text-crimson-500" />
                        <span className="font-medium">Our Branches</span>
                      </div>
                      <p className="text-sm text-gray-300">
                        Serving aspirants across multiple locations in Gujarat
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Director's Desk Section */}
        <div className="bg-white py-12 px-6 rounded-xl shadow-lg mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-midnight-600 mb-8 text-center">
            Director's Desk
          </h3>
          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
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
