import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { Check, BookOpen, ClipboardCheck, MapPin } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import OptimizedImage from '../OptimizedImage';

interface ProfileProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

// Profile Card Skeleton Component
const ProfileSkeleton = () => {
  return (
    <Card className="overflow-hidden bg-white border-midnight-200 h-full">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <Skeleton className="h-36 w-36 rounded-full mb-5" />
          <Skeleton className="h-6 w-48 mb-2" />
          <Skeleton className="h-4 w-36 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </CardContent>
    </Card>
  );
};

const Profile = ({
  name = "John Doe",
  role = "Role",
  bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  imageUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
}: ProfileProps) => {
  return (
    <Card className="overflow-hidden bg-white border-midnight-200 hover:shadow-xl transition-all duration-300">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 overflow-hidden">
            <OptimizedImage
              src={imageUrl}
              alt={`${name} - ${role}`}
              width={300}
              height={300}
              quality={85}
              blurEffect={true}
              priority={false}
              className="w-full h-full"
              imgClassName="object-cover w-full h-full max-h-[300px]"
              role="profile"
            />
          </div>
          <div className="md:w-2/3 p-6 flex flex-col justify-center">
            <h4 className="text-xl font-semibold text-midnight-600">{name}</h4>
            <p className="text-crimson-500 font-medium mb-3">{role}</p>
            <p className="text-gray-700 leading-relaxed">{bio}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// About Section Content Skeleton
const AboutSectionSkeleton = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <Skeleton className="h-10 w-64 mx-auto mb-3" />
        <div className="w-24 h-1 bg-gray-200 mx-auto mb-6"></div>
        <Skeleton className="h-5 w-full max-w-3xl mx-auto" />
      </div>

      {/* About Section Card Skeleton */}
      <div className="mb-16">
        <Card className="overflow-hidden border-none shadow-md bg-white">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Skeleton className="h-8 w-48 mb-4" />
                <Skeleton className="w-16 h-1 mb-6" />
                
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-6" />
                
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-6" />

                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex-1 min-w-[250px] p-4 bg-gray-100 rounded-lg">
                    <div className="flex items-center">
                      <Skeleton className="w-14 h-14 rounded-full mr-4" />
                      <Skeleton className="h-5 w-32" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-[250px] p-4 bg-gray-100 rounded-lg">
                    <div className="flex items-center">
                      <Skeleton className="w-14 h-14 rounded-full mr-4" />
                      <Skeleton className="h-5 w-32" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center items-center">
                <div className="rounded-lg overflow-hidden w-full">
                  <Skeleton className="w-full aspect-[4/3]" />
                  <div className="bg-gray-100 p-4">
                    <div className="flex items-center justify-center mb-2">
                      <Skeleton className="h-5 w-5 mr-2 rounded-full" />
                      <Skeleton className="h-5 w-32" />
                    </div>
                    <Skeleton className="h-4 w-3/4 mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Director's Desk Skeleton */}
      <div className="bg-white py-12 px-6 rounded-xl shadow-md mb-8">
        <Skeleton className="h-8 w-48 mx-auto mb-8" />
        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
          <ProfileSkeleton />
          <ProfileSkeleton />
        </div>
      </div>
    </div>
  );
};

interface AboutSectionProps {
  visionMission?: string;
  overview?: string;
  founderProfile?: ProfileProps;
  directorProfile?: ProfileProps;
}

const AboutSection = ({
  visionMission = "Our vision is to be the premier center for civil services preparation, empowering aspirants to achieve excellence through quality education, personalized guidance, and comprehensive study materials. We are committed to nurturing future leaders who will serve the nation with integrity and dedication.",
  overview = "GenX IAS is a leading coaching center dedicated to preparing students for UPSC, GPSC, and other competitive examinations. With state-of-the-art facilities, experienced faculty, and a proven track record of success, we provide comprehensive coaching programs tailored to meet the needs of civil service aspirants.",
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
    bio: "Ms. Shradhha Solanki brings her expertise in educational management to GenX IAS. Her strategic leadership and commitment to excellence have been instrumental in establishing GenX IAS as a premier destination for civil services preparation.",
    imageUrl:
      "/Shradhha Solanki.jpg",
  },
}: AboutSectionProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduced loading time for better performance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section id="about" className="py-20 bg-gradient-to-b from-midnight-50 to-gray-50">
        <AboutSectionSkeleton />
      </section>
    );
  }

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-midnight-50 to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
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

        {/* Improved About Section Card */}
        <div className="mb-16">
          <Card className="overflow-hidden border-none shadow-lg bg-white">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-midnight-600 mb-3">
                    Our Mission
                  </h3>
                  <div className="w-16 h-1 bg-crimson-500 mb-4"></div>
                  
                  <p className="text-gray-700 text-sm md:text-base mb-4">
                    {visionMission}
                  </p>
                  
                  <h3 className="text-2xl font-bold text-midnight-600 mb-3 mt-6">
                    What We Offer
                  </h3>
                  <div className="w-16 h-1 bg-crimson-500 mb-4"></div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-midnight-50 to-gray-100 p-3 rounded-lg shadow-sm border border-midnight-100/30 transition-transform hover:scale-105 duration-300">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-midnight-600/10 rounded-full flex items-center justify-center mr-3 text-crimson-500">
                          <Check className="h-6 w-6" />
                        </div>
                        <span className="text-midnight-600 font-medium text-sm">
                          Expert Faculty
                        </span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-midnight-50 to-gray-100 p-3 rounded-lg shadow-sm border border-midnight-100/30 transition-transform hover:scale-105 duration-300">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-midnight-600/10 rounded-full flex items-center justify-center mr-3 text-crimson-500">
                          <BookOpen className="h-6 w-6" />
                        </div>
                        <span className="text-midnight-600 font-medium text-sm">
                          Study Material
                        </span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-midnight-50 to-gray-100 p-3 rounded-lg shadow-sm border border-midnight-100/30 transition-transform hover:scale-105 duration-300">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-midnight-600/10 rounded-full flex items-center justify-center mr-3 text-crimson-500">
                          <ClipboardCheck className="h-6 w-6" />
                        </div>
                        <span className="text-midnight-600 font-medium text-sm">
                          Test Series
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm md:text-base mt-6">
                    {overview}
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-midnight-100/30 to-gray-50 flex justify-center items-center p-8">
                  <div className="rounded-lg overflow-hidden shadow-md transform transition-all duration-500 hover:shadow-xl max-w-sm">
                    <OptimizedImage
                      src="/GenxMap.jpg"
                      alt="GenX IAS Locations"
                      width={400}
                      height={300}
                      quality={80}
                      priority={false}
                      blurEffect={true}
                      className="w-full h-full"
                      imgClassName="w-full h-auto object-cover"
                      role="gallery"
                    />
                    <div className="bg-gradient-to-r from-midnight-700 to-midnight-600 text-white p-3 text-center">
                      <div className="flex items-center justify-center mb-1">
                        <MapPin className="h-4 w-4 mr-2 text-crimson-400" />
                        <span className="font-medium text-sm">Our Branches</span>
                      </div>
                      <p className="text-xs text-gray-200">
                        Serving aspirants across multiple locations in Gujarat
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Director's Desk Section - Horizontal Layout with Facing Images */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-midnight-600 mb-8 text-center">
            Director's Desk
          </h3>
          <div className="grid grid-cols-1 gap-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Founder Profile */}
              <Profile
                name={founderProfile.name}
                role={founderProfile.role}
                bio={founderProfile.bio}
                imageUrl={founderProfile.imageUrl}
              />
              
              {/* Director Profile */}
              <Profile
                name={directorProfile.name}
                role={directorProfile.role}
                bio={directorProfile.bio}
                imageUrl={directorProfile.imageUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
