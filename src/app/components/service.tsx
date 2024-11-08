import { FaPalette, FaMobileAlt, FaUsers } from 'react-icons/fa'; // Icons for services

const Services = () => {
  return (
    <section id="services" className="w-auto max-w-screen-2xl mx-auto bg-pink-50 py-12 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-5xl font-bold text-pink-600 mb-8">
          My Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 - UI/UX Design */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <FaPalette className="text-pink-600 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-gray-900">UI/UX Design</h3>
            <p className="text-gray-700 leading-relaxed">
              Creating user-centered, intuitive, and visually appealing interfaces that enhance the overall user experience across web and mobile platforms.
            </p>
          </div>

          {/* Service 2 - Responsive Web Design */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <FaMobileAlt className="text-pink-600 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Responsive Web Design</h3>
            <p className="text-gray-700 leading-relaxed">
              Building responsive websites that look stunning and function seamlessly on all devices, ensuring a consistent experience for users everywhere.
            </p>
          </div>

          {/* Service 3 - Digital Creative Direction */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <FaUsers className="text-pink-600 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Digital Creative Direction</h3>
            <p className="text-gray-700 leading-relaxed">
              Leading creative teams and projects to deliver visually striking and highly engaging digital campaigns, websites, and applications.
            </p>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Services;
