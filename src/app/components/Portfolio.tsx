"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft, FaGithub, FaLink } from "react-icons/fa";

const DecorativeDots: React.FC = () => {
  return (
    <div className="flex justify-center space-x-2 mt-8">
      <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce" />
      <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce delay-200" />
      <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce delay-400" />
      <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce" />
      <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce delay-200" />
      <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce delay-400" />
    </div>
  );
};

interface Portfolio {
  id: number;
  name: string;
  description: string;
  language: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const projects: Portfolio[] = [
  {
    id: 1,
    name: "Roamstay-website",
    description:
      "This is a Roamstay-web built using HTML, CSS, and Typescript. It is a responsive web application that looks great on all devices.",
    language: "HTML, CSS and JavaScript",
    image: "/project1.png",
    githubUrl: "https://github.com/UroobaSiddiqui01/Room-stay-website.git",
    liveUrl: "https://room-stay-website.vercel.app/",
  },
  {
    id: 2,
    name: "Amazon-Clone",
    description:
      "This is an Amazon clone-website built using HTML, CSS, and JavaScript.",
    language: "HTML, CSS and JavaScript",
    image: "/project2.png",
    githubUrl: "https://github.com/UroobaSiddiqui01/Amazon_clone.git",
    liveUrl: "https://amazon-clone-two-blush.vercel.app/",
  },
  {
    id: 3,
    name: "OrganicShop",
    description:
      "This is an Organic Shop E-Commerce website built using Next.js and Tailwind CSS. It is a responsive web application that looks great on all devices.",
    language: "Next.js and Tailwind CSS",
    image: "/project3.png",
    githubUrl: "https://github.com/UroobaSiddiqui01/OrganicShop.git",
    liveUrl: "https://organic-shop-navy.vercel.app/",
  },
  {
    id: 4,
    name: "Fast-Food-Restauant",
    description:
      "This is a Fast-Food-Restauant Website  using HTML, CSS.It is a responsive web application that looks great on all devices.",
    language: "HTML and CSS",
    image: "/project4.png",
    githubUrl: "https://github.com/UroobaSiddiqui01/Fast-Food-Restaurant.git",
    liveUrl: "https://fast-food-restaurant-beta.vercel.app/",
  },
  {
    id: 5,
    name: "Solar-Energy-System",
    description:
      "This is a solar-energy-system website built using Next.js and Tailwind CSS. It is a responsive web application that looks great on all devices.",
    language: "Next.js and Tailwind CSS",
    image: "/project5.png",
    githubUrl: "https://github.com/UroobaSiddiqui01/solar-energy-system.git",
    liveUrl: "https://solar-energy-system.vercel.app/",
  },
  {
    id: 6,
    name: "Coffee-Website",
    description: 
       "This is a Coffee web built using HTML, CSS.It is a responsive web application that looks great on all devices.",
    language: "HTML and CSS",
    image: "/project6.png",
    githubUrl: "https://github.com/UroobaSiddiqui01/coffee_Website.git",
    liveUrl: "https://coffee-website-lyart.vercel.app/",
  },
];

const Portfolio: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<number>(0);

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const { id, name, description, language, image, githubUrl, liveUrl } =
    projects[currentProject];

  return (
    <section id="Portfolio" className="py-16 px-4 bg-pink-50">
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 mb-8">
        My Projects
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 md:ml-10 mb-9">
          <h3 className="text-3xl sm:text-4xl md:text-9xl font-bold font-mono text-pink-600 mb-4">
            0{id}
          </h3>
          <h4 className="text-lg md:text-4xl text-pink-600 mb-4">{name}</h4>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4">
            {description}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-pink-800 font-normal mb-4">
            {language}
          </p>
          <div className="my-2 border-t border-gray-300 w-full"></div>
          <div className="flex space-x-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 border-2 border-gray-500 hover:border-gray-400 rounded-full p-3"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 border-2 border-gray-500 hover:border-gray-400 rounded-full p-3"
            >
              <FaLink size={24} />
            </a>
          </div>
          <DecorativeDots />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-64 sm:h-80 md:h-96 bg-pink-100 p-4 flex justify-center items-center overflow-hidden">
            <Image
              src={image}
              alt={name}
              className="object-contain w-full h-full"
              height={800}
              width={800}
            />
          </div>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <button
              onClick={handlePrevious}
              className="text-white bg-pink-600 hover:bg-pink-700 rounded-full p-2 md:p-3 border-2 border-gray-500 hover:border-gray-400"
            >
              <FaArrowLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="text-white bg-pink-600 hover:bg-pink-700 rounded-full p-2 md:p-3 border-2 border-gray-500 hover:border-gray-400"
            >
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
