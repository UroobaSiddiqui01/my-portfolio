import Image from 'next/image';
import Link from 'next/link';
 

const HeroSection = () => {
  return (
    
    <section className="bg-pink-50 py-12 lg:py-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8">
        
        {/* Image Section - Positioned on the Left */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start mb-10 lg:mb-0">
          <Image 
            src="/beautiful-hijab.png" 
            alt="UROOBA SIDDIQUI - Designer" 
            width={500} 
            height={500} 
            className="w-full lg:w-3/4 rounded-lg shadow-md"
          />
        </div>

        {/* Text Content - Positioned on the Right */}
        <div className="lg:w-1/2 text-center lg:text-left">
          
          {/* Heading with Animation */}
          <h3 className="text-3xl lg:text-5xl font-bold text-pink-600 mb-4 animate-bounce">
            Hi!  I’m
          </h3>
          <h1 className="text-4xl lg:text-6xl font-bold text-pink-600 mb-4 animate-fade-in">
            UROOBA SIDDIQUI
          </h1>

          {/* Role/Profession in h2 */}
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3">
            UI/UX Designer
          </h2>

          {/* Description in h3 */}
          <h3 className="text-lg lg:text-xl text-gray-700 mb-6">
            Product Designer and Digital Creative Director with 2 years of experience. 
            Specializing in UI/UX, branding, and digital design. I am here to help you 
            create your next visual masterpiece.
          </h3>

          <div className="space-x-4">
            {/* Link to Contact */}
            <Link href="/#contact" legacyBehavior>
              <a className="inline-block bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition">
                Hire Me Now
               
              </a>
            </Link>
            {/* Link to Portfolio */}
            <Link href="/#Portfolio" legacyBehavior>
              <a className="inline-block bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 transition">
                View Portfolio
              </a>
            </Link>
          </div>
        </div>

      </div>
      
    </section>
  
  );
};

export default HeroSection;






