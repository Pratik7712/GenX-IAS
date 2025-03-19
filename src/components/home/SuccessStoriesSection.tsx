import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { Card, CardContent } from "../ui/card";
import { Quote, Star } from "lucide-react";

interface SuccessStoryProps {
  name: string;
  exam: string;
  rank: string;
  batch: string;
  testimonial: string;
  image: string;
}

const SuccessStory = ({
  name,
  exam,
  rank,
  batch,
  testimonial,
  image,
}: SuccessStoryProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="h-full"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl border-midnight-200 bg-white">
        <CardContent className="p-6">
          <div className="flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="relative w-16 h-16 mr-4">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover rounded-full shadow-md border-2 border-crimson-500"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-midnight-600">{name}</h3>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-600">
                    <span className="font-medium">{exam}</span> - Rank {rank}
                  </span>
                  <span className="text-xs text-crimson-500">Batch: {batch}</span>
                </div>
              </div>
            </div>

            <div className="relative flex-grow mb-4">
              <Quote className="h-8 w-8 text-midnight-100 absolute -top-1 -left-1" />
              <p className="text-gray-700 italic pl-6 relative z-10">{testimonial}</p>
            </div>

            <div className="flex text-yellow-500 mt-auto">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SuccessStoriesSection = () => {
  const successStories: SuccessStoryProps[] = [
    {
      name: "Ananya Sharma",
      exam: "UPSC CSE",
      rank: "45",
      batch: "2020-21",
      testimonial:
        "GenX IAS Academy played a crucial role in my UPSC journey. The structured approach, comprehensive study material, and personal mentoring helped me secure a top rank.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      name: "Rahul Patel",
      exam: "GPSC Class 1-2",
      rank: "12",
      batch: "2020-21",
      testimonial:
        "The faculty at GenX IAS are exceptional. Their guidance and test series were instrumental in my success. I'm grateful for their constant support throughout my preparation.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    },
    {
      name: "Priya Desai",
      exam: "UPSC CSE",
      rank: "87",
      batch: "2019-20",
      testimonial:
        "What sets GenX IAS apart is their personalized attention to each student. The mock interviews and answer writing sessions significantly improved my performance.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    },
    {
      name: "Vikram Mehra",
      exam: "UPSC CSE",
      rank: "134",
      batch: "2019-20",
      testimonial:
        "I joined GenX IAS after attempting UPSC twice. Their strategic guidance and focused approach helped me clear the exam in my third attempt. Eternally thankful!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      name: "Sneha Joshi",
      exam: "GPSC Class 1-2",
      rank: "8",
      batch: "2021-22",
      testimonial:
        "The current affairs sessions and Gujarat-specific material at GenX IAS gave me an edge in the GPSC examination. Highly recommend their specialized batches.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    },
    {
      name: "Arjun Singh",
      exam: "UPSC CSE",
      rank: "156",
      batch: "2020-21",
      testimonial:
        "From day one, GenX IAS instilled confidence in me. Their methodical approach to the vast UPSC syllabus and regular feedback mechanism were game-changers.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    },
  ];

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
            Our students' achievements speak volumes about our coaching quality.
            Here are some of our star performers who've made us proud.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <SuccessStory key={index} {...story} />
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
            Join GenX IAS Academy and become our next success story!
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
