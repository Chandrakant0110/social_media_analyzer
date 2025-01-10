import React from "react";
import { motion } from "framer-motion";
import chandrakantImg from '../assets/images/chandrakant.jpg';
import arjitImg from '../assets/images/arjit.jpg';
import bhaveshImg from '../assets/images/bhavesh.jpg';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const members = [
  {
    name: "Chandrakant Sahu",
    githubLink: "https://github.com/Chandrakant0110/",
    email: "chandrakant.21.07.2003@gmail.com",
    image: chandrakantImg,
    role: "Full Stack Developer"
  },
  {
    name: "Arjit Khare",
    githubLink: "https://github.com/Arjit31",
    email: "apk20023110@gmail.com",
    image: arjitImg,
    role: "Backend Developer"
  },
  {
    name: "Bhavesh Balendra",
    githubLink: "https://github.com/bhaveshbalendra/",
    email: "bhaveshbalendra@gmail.com",
    image: bhaveshImg,
    role: "Frontend Developer"
  },
];

const MemberPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl px-4 mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 sm:text-5xl"
        >
          Meet Our Team
        </motion.h1>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-3"
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative overflow-hidden group"
            >
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl transition-all duration-300 transform hover:shadow-2xl">
                <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full ring-4 ring-indigo-600/20">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                <h3 className="mb-2 text-2xl font-bold text-center text-gray-800 dark:text-white">
                  {member.name}
                </h3>
                
                <p className="mb-4 text-sm font-medium text-center text-indigo-600 dark:text-indigo-400">
                  {member.role}
                </p>

                <div className="flex justify-center space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={`mailto:${member.email}`}
                    className="p-2 text-gray-600 transition-colors duration-300 rounded-full hover:bg-gray-100 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-indigo-400"
                  >
                    <FaEnvelope className="w-5 h-5" />
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={member.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 transition-colors duration-300 rounded-full hover:bg-gray-100 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-indigo-400"
                  >
                    <FaGithub className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MemberPage;
