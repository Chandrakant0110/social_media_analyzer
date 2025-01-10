import React from "react";
import chandrakantImg from '../assets/images/chandrakant.jpg';
import arjitImg from '../assets/images/arjit.jpg';
import bhaveshImg from '../assets/images/bhavesh.jpg';

const members = [
  {
    name: "Chandrakant Sahu",
    githubLink: "https://github.com/Chandrakant0110/",
    email: "chandrakant.21.07.2003@gmail.com",
    image: chandrakantImg,
  },
  {
    name: "Arjit Khare",
    githubLink: "https://github.com/Arjit31",
    email: "apk20023110@gmail.com",
    image: arjitImg,
  },
  {
    name: "Bhavesh Balendra",
    githubLink: "https://github.com/bhaveshbalendra/",
    email: "bhaveshbalendra@gmail.com",
    image: bhaveshImg,
  },
];

const MemberPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 pb-8 bg-gray-100">
      <div className="max-w-4xl px-4 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center text-gray-800 sm:text-4xl">
          Our Team
        </h1>
        <div className="grid gap-6 md:grid-cols-3">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-2xl font-bold text-white bg-gray-400">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
              
              <h3 className="mb-2 text-xl font-semibold text-center text-gray-800">
                {member.name}
              </h3>
              
              <p className="text-sm text-center text-gray-600">
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {member.email}
                </a>
              </p>
              
              <a
                href={member.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm text-blue-600 hover:underline"
              >
                GitHub Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
