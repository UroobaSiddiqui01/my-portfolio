import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative w-full max-w-screen-2xl mx-auto bg-pink-50 py-8 sm:py-12 lg:py-24 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between px-4 lg:px-8 relative z-10">

        {/* Text Content - Positioned on the Right */}
        <div className="lg:w-1/2 text-center lg:text-left z-20 mb-8 lg:mb-0">
          <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-pink-600 mb-2 lg:mb-4 animate-bounce">
            Hi! I’m
          </h3>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-pink-600 mb-2 lg:mb-4 animate-fade-in">
            UROOBA SIDDIQUI
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2 lg:mb-3">
            UI/UX Designer
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-700 mb-4 lg:mb-6">
            Product Designer and Digital Creative Director with 2 years of experience.
            Specializing in UI/UX, branding, and digital design. I am here to help you
            create your next visual masterpiece.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center lg:justify-start">
            <Link href="/resume-builder" legacyBehavior>
              <a className="inline-block bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition">
                Create Your Resume
              </a>
            </Link>
            <Link href="/#Portfolio" legacyBehavior>
              <a className="inline-block bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 transition">
                View Project
              </a>
            </Link>
          </div>
        </div>

        {/* Image Section - Positioned on the Left */}
        <div className="lg:w-1/2 flex items-center justify-center lg:justify-start">
          <div className="relative w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-8 border-pink-600 animate-float transition-transform duration-300 ease-in-out transform hover:animate-glow">
            <Image
              src="/preview.png"
              alt="UROOBA SIDDIQUI - Designer"
              layout="fill"
              objectFit="cover"
              objectPosition="top center"
              className="opacity-90 rounded-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-200 opacity-40 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;









