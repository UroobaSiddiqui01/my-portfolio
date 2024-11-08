import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="w-auto max-w-screen-2xl mx-auto bg-white py-8 sm:py-12 lg:py-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Text Content - Positioned on the Left */}
        <div className="lg:w-1/2 text-left mb-8 lg:mb-0">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-pink-600 mb-4">
            About Me
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
            I’m Urooba Siddiqui, a dedicated UI/UX Designer and Digital Creative Director with over 2 years of industry experience.
            My passion lies in transforming complex ideas into visually stunning and user-friendly digital products.
            Throughout my career, I’ve worked on a diverse range of projects, crafting seamless user journeys, modern interfaces, and creative brand designs that leave lasting impressions.
            I’m driven by innovation, a love for aesthetic design, and the challenge of making digital experiences as intuitive and engaging as possible.
            Whether it’s bringing a concept to life or refining an existing design, I always strive for perfection in every pixel.
          </p>
        </div>

        {/* Skills Section - Positioned on the Right */}
        <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
          <div className="flex flex-col items-center">
            <Image
              src="/html.png"
              alt="HTML Skill"
              width={80}
              height={80}
              className="mb-2"
            />
            <p className="text-gray-900 text-xs sm:text-sm">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/css.png"
              alt="CSS Skill"
              width={80}
              height={80}
              className="mb-2"
            />
            <p className="text-gray-900 text-xs sm:text-sm">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/javascript.png"
              alt="JavaScript Skill"
              width={80}
              height={80}
              className="mb-2"
            />
            <p className="text-gray-900 text-xs sm:text-sm">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/ts.png"
              alt="TypeScript Skill"
              width={80}
              height={80}
              className="mb-2"
            />
            <p className="text-gray-900 text-xs sm:text-sm">TypeScript</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/download.png"
              alt="Next.js Skill"
              width={80}
              height={80}
              className="mb-2"
            />
            <p className="text-gray-900 text-xs sm:text-sm">Next.js</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/tailwind.png"
              alt="Tailwind CSS Skill"
              width={80}
              height={80}
              className="mb-2"
            />
            <p className="text-gray-900 text-xs sm:text-sm">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/git.png"
              alt="Git Skill"
              width={80}
              height={80}
              className="mb-2"
            />
            <p className="text-gray-900 text-xs sm:text-sm">Git</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/github.png"
              alt="Github Skill"
              width={80}
              height={80}
              className="mb-2"
            />
            <p className="text-gray-900 text-xs sm:text-sm">Github</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/node.png"
              alt="Node.js Skill"
              width={80}
              height={80}
              className="mb-2"
            />
            <p className="text-gray-900 text-xs sm:text-sm">Node.js</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
