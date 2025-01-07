import React from "react";

const members = [
  {
    name: "Chandrakant Sahu",
    githubLink: "https://github.com/Chandrakant0110/",
    email: "chandrakant.21.07.2003@gmail.com",
  },
  {
    name: "Arjit Khare",
    githubLink: "https://github.com/Arjit31",
    email: "apk20023110@gmail.com",
  },
  {
    name: "Bhavesh Balendra",
    githubLink: "https://github.com/bhaveshbalendra/",
    email: "bhaveshbalendra@gmail.com",
  },
];

const MemberPage: React.FC = () => {
  return (
    <div className="min-h-screen py-8 bg-gray-100">
      <div className="max-w-4xl px-4 mx-auto">
        <h1 className="mb-8 text-2xl font-bold text-center text-gray-800 sm:text-3xl">
          Our Team
        </h1>
        <ul className="space-y-6">
          {members.map((member, index) => (
            <li
              key={index}
              className="p-4 transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg sm:p-6"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-800 sm:text-xl">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 sm:text-base">
                <span className="font-medium text-gray-700">Email: </span>
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {member.email}
                </a>
              </p>
              <p className="text-sm text-gray-600 sm:text-base">
                <span className="font-medium text-gray-700">GitHub: </span>
                <a
                  href={member.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {member.githubLink}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MemberPage;
