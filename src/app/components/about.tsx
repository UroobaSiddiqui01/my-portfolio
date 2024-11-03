import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-12 lg:py-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8">
        
        {/* Text Content - Positioned on the Left */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          {/* Heading */}
          <h2 className="text-3xl lg:text-5xl font-bold text-pink-600 mb-4">
            About Me
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
          I’m Urooba Siddiqui, a dedicated UI/UX Designer and Digital Creative Director with over 2 years of industry experience.
           My passion lies in transforming complex ideas into visually stunning and user-friendly
          digital products. Throughout my career, I’ve worked on a diverse range of projects, 
          crafting seamless user journeys, modern interfaces, and creative brand designs that leave lasting impressions. 
          I’m driven by innovation, a love for aesthetic design, and the challenge of making digital experiences as intuitive and engaging as possible.
           Whether it’s bringing a concept to life or refining an existing design, I always strive for perfection in every pixel.
</p>


          {/* Skill Section */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <Image
                src="/html.png"
                alt="HTML Skill"
                width={80}
                height={80}
                className="mb-2"
              />
              <p className="text-gray-900 text-sm">HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/css.png"
                alt="CSS Skill"
                width={80}
                height={80}
                className="mb-2"
              />
              <p className="text-gray-900 text-sm">CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/javascript.png"
                alt="JavaScript Skill"
                width={80}
                height={80}
                className="mb-2"
              />
              <p className="text-gray-900 text-sm">JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/ts.png"
                alt="TypeScript Skill"
                width={80}
                height={80}
                className="mb-2"
              />
              <p className="text-gray-900 text-sm">TypeScript</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/download.png"
                alt="Next.js Skill"
                width={80}
                height={80}
                className="mb-2"
              />
              <p className="text-gray-900 text-sm">Next.js</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/tailwind.png"
                alt="Tailwind CSS Skill"
                width={80}
                height={80}
                className="mb-2"
              />
              <p className="text-gray-900 text-sm">Tailwind CSS</p>
            </div>
            <div className=" flex flex-col items-center">
              <Image
                src="/git.png"
                alt="Git Skill"
                width={80}
                height={80}
                className="bg-white mb-2"
              />
              <p className="text-gray-900 text-sm">Git</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/github.png"
                alt="Github Skill"
                width={80}
                height={80}
                className="mb-2"
              />
              <p className="text-gray-900 text-sm">Github</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/node.png"
                alt="Node.js Skill"
                width={80}
                height={80}
                className="mb-2"
              />
              <p className="text-gray-900 text-sm">Node.js</p>
            </div>
            
          </div>
        </div>

        {/* Image Section - Positioned on the Right */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/download.jpeg" // Ensure this image exists in the /public/images folder
            alt="UROOBA SIDDIQUI - About Image"
            width={400}
            height={400}
            className="w-full lg:w-3/4 rounded-lg shadow-md"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
