import {
  AiOutlineMail,
  AiOutlineEnvironment,
  AiOutlineArrowUp,
} from "react-icons/ai";

const DecorativeDots: React.FC = () => {
  return (
    <div className="flex justify-center space-x-2 mt-8">
      <div className="w-3 h-3 bg-pink-900 rounded-full animate-bounce" />
      <div className="w-3 h-3 bg-pink-800 rounded-full animate-bounce delay-200" />
      <div className="w-3 h-3 bg-pink-700 rounded-full animate-bounce delay-400" />
      <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce" />
      <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-200" />
      <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-400" />
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-auto max-w-screen-2xl mx-auto bg-pink-50 py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start px-6 space-y-8 md:space-y-0">
        {/* Contact Info */}
        <div className="contact-info flex-1 p-8 mb-8 md:mb-0 justify-center mt-16 md:mt-0">
          <div className="info text-gray-600">
            <p className="mb-6 flex items-center">
              <span className="flex items-center justify-center w-16 h-16 bg-pink-700 rounded-xl mr-3">
                <AiOutlineEnvironment className="text-pink-200 text-4xl" />
              </span>
              <span>
                <strong>Location:</strong>
                <br />
                <span className="text-sm text-pink-600 font-mono">
                  Karachi, Pakistan
                </span>
              </span>
            </p>
            <p className="mb-6 flex items-center">
              <span className="flex items-center justify-center w-16 h-16 bg-pink-700 rounded-xl mr-3">
                <AiOutlineMail className="text-pink-200 text-4xl" />
              </span>
              <span>
                <strong>Email:</strong>
                <br />
                <span className="text-sm text-pink-600 font-bold font-mono">
                  urooba.sidd@gmail.com
                </span>
              </span>
            </p>
          </div>
          <DecorativeDots/>
        </div>

        {/* Contact Form */}
        <div className="contact-form flex-1 bg-pink-200 p-8 rounded-lg shadow-lg mx-auto md:mx-0 w-full md:max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-700 text-center">
            Get in Touch
          </h2>
          <form>
            <div className="form-group mb-4 flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1 mb-4 md:mb-0">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Your First Name"
                  required
                  className="w-full border border-pink-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-pink-600 bg-transparent placeholder-pink-500"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Your Last Name"
                  required
                  className="w-full border border-pink-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-pink-600 bg-transparent placeholder-pink-500"
                />
              </div>
            </div>

            <div className="form-group mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border border-pink-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-pink-600 bg-transparent placeholder-pink-500"
              />
            </div>
            <div className="form-group mb-4">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="w-full border border-pink-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-pink-600 bg-transparent placeholder-pink-500"
              />
            </div>
            <button
              type="submit"
              className="bg-pink-600 text-white py-3 px-6 rounded-lg border border-pink-500 flex items-center justify-center mx-auto hover:bg-pink-500 transition duration-300"
            >
              <AiOutlineArrowUp size={20} className="mr-2" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;