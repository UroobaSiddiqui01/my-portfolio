import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer: React.FC = () => {
  return (
    <footer className="w-auto max-w-screen-2xl mx-auto bg-pink-200 text-pink-100 py-6 sm:py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold text-pink-600">Urooba Siddiqui</h2>
          <p className="text-sm text-pink-600">© 2024 All Rights Reserved</p>
        </div>

        <div className="flex space-x-4 justify-center md:justify-end">
          <a
            href="https://github.com/UroobaSiddiqui01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-white transition duration-300"
          >
            <AiFillGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/urooba-siddiqui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-white transition duration-300"
          >
            <AiFillLinkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;